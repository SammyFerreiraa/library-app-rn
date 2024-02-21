import { useBook } from '@/hooks/useBook'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native'
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons'
import {
  AuthorProfile,
  BadgeCategory,
  BookDescription,
  SectionBooks,
} from '@/components'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'
import { RentedProps, useRented } from '@/modules/Library/hooks/useRented'
import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'

const Book = () => {
  const [loading, setLoading] = useState(false)
  const scrollViewRef = useRef<ScrollView>(null)
  const { authData } = useAuth()
  const [favorite, setFavorite] = useState<boolean | undefined>(false)
  const [rental, setRental] = useState<boolean | undefined>(false)

  const { Rented, addRented, returnRented } = useRented()
  const { books } = useBook()
  const { Favorites, addFavorite, removeFavorite } = useFavorites()
  const { addCompletedRental } = useCompletedRentals()

  const { isbn } = useLocalSearchParams()

  const book = books.find((book) => book.isbn === isbn)
  const rentedBook = Rented.find((book) => book.copy.book.isbn === isbn)

  useEffect(() => {
    if (Favorites.some((book) => book.isbn === isbn)) setFavorite(true)
    if (Rented.some((book) => book.copy.book.isbn === isbn)) setRental(true)
    scrollViewRef.current?.scrollTo({ y: 0, animated: true })
  }, [book?.isbn, Favorites, isbn, Rented])

  const removeFav = () => {
    const remove = async () => {
      try {
        if (!authData?.token) return
        removeFavorite(book?.isbn as string)
        setFavorite(false)
        await axios.delete(`http://10.0.0.106:3000/favorites`, {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
          data: {
            bookId: book?.id,
          },
        })
      } catch (error) {
        console.log(error)
        setFavorite(true)
        addFavorite({
          id: book?.id as string,
          title: book?.title as string,
          author: book?.author as string,
          category: book?.category as string,
          image: book?.image as string,
          isbn: book?.isbn as string,
        })
      }
    }
    remove()
  }

  const addFav = () => {
    const add = async () => {
      try {
        if (!authData?.token) return
        addFavorite({
          id: book?.id as string,
          title: book?.title as string,
          author: book?.author as string,
          category: book?.category as string,
          image: book?.image as string,
          isbn: book?.isbn as string,
        })
        setFavorite(true)
        await axios.post(
          `http://10.0.0.106:3000/favorites`,
          {
            bookId: book?.id,
          },
          {
            headers: {
              Authorization: 'Bearer ' + authData?.token,
            },
          },
        )
      } catch (error) {
        console.log(error)
        removeFavorite(book?.isbn as string)
        setFavorite(false)
      }
    }
    add()
  }

  const returnBook = () => {
    if (!authData?.token) return
    if (!rentedBook) return
    console.log(rentedBook?.id)
    Alert.alert(
      'Devolver Livro',
      'Deseja realmente devolver este livro?',
      [
        {
          text: 'Cancelar',
          onPress: () => setLoading(false),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => ret() },
      ],
      { cancelable: false },
    )
    const ret = async () => {
      setLoading(true)
      try {
        await axios
          .delete(`http://10.0.0.106:3000/rentals/${rentedBook?.id}`, {
            headers: {
              Authorization: 'Bearer ' + authData?.token,
            },
          })
          .then(() => {
            addCompletedRental({
              copy: rentedBook?.rental.copy,
              id: rentedBook?.rental.id,
              delay: 0,
              returnedAt: new Date().toString(),
              rentedAt: rentedBook?.rental.rentedAt as string,
            })
            returnRented(rentedBook as RentedProps)
            setRental(false)
            setLoading(false)
          })
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.log((error as any).response.data)
      }
    }
  }

  const rentalBook = () => {
    if (!authData?.token) return
    Alert.alert(
      'Alugar Livro',
      'Deseja realmente alugar este livro?',
      [
        {
          text: 'Cancelar',
          onPress: () => setLoading(false),
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => rental() },
      ],
      { cancelable: false },
    )
    const rental = async () => {
      setLoading(true)
      try {
        await axios
          .post(
            `http://10.0.0.106:3000/rentals`,
            {
              bookId: book?.id,
            },
            {
              headers: {
                Authorization: 'Bearer ' + authData?.token,
              },
            },
          )
          .then((res) => {
            addRented(res.data.rental)
            setRental(true)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((error as any).response?.status === 433) {
          Alert.alert(
            'Livro Indisponível',
            'Desculpe, mas não há copias desse livro disponível atualmente.',
          )
        }
      }
    }
  }

  return (
    <View className="flex-1 items-center bg-black pb-[68px]">
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="w-[100%] flex-1 pt-5"
      >
        <View className="relative mx-4 mb-8 flex-1 items-center justify-center pt-24">
          <Image
            source={{ uri: book?.image }}
            alt={book?.title}
            className="h-[220px] w-[153px]"
          />
          <View className="absolute -bottom-2 w-full flex-row justify-between rounded-md bg-slate-800 py-4">
            {rental && (
              <TouchableOpacity
                className="flex-1 flex-row items-center justify-center gap-3"
                activeOpacity={0.7}
                onPress={returnBook}
              >
                {loading && (
                  <ActivityIndicator
                    className="flex-1"
                    size="small"
                    color="white"
                  />
                )}
                {!loading && (
                  <View className="flex-row items-center" style={{ gap: 12 }}>
                    <Feather name="check-circle" size={24} color="white" />
                    <Text className="text-base font-bold text-white">
                      Livro Alugado
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            {!rental && (
              <TouchableOpacity
                className="flex-1 flex-row items-center justify-center gap-3"
                activeOpacity={0.7}
                onPress={rentalBook}
              >
                {loading && (
                  <ActivityIndicator
                    className="flex-1"
                    size="small"
                    color="white"
                  />
                )}
                {!loading && (
                  <View className="flex-row" style={{ gap: 12 }}>
                    <Feather name="book" size={24} color="white" />
                    <Text className="text-base font-bold text-white">
                      Alugar Livro
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            <View className="h-6 w-[1px] bg-neutral-500"></View>
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center gap-3"
              activeOpacity={0.7}
            >
              <Feather name="headphones" size={24} color="white" />
              <Text className="text-base font-bold text-white">
                Escutar Livro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4 mb-9">
          <View className="5flex-1 flex-row  items-center justify-between">
            <Text className="flex-1 text-3xl font-bold text-white">
              {book?.title}
            </Text>
            {favorite && (
              <TouchableOpacity activeOpacity={0.7} onPress={removeFav}>
                <Entypo name="heart" size={28} color="red" />
              </TouchableOpacity>
            )}
            {!favorite && (
              <TouchableOpacity activeOpacity={0.7} onPress={addFav}>
                <Entypo name="heart-outlined" size={28} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <Text className="text-sm text-neutral-500">{book?.author}</Text>
        </View>
        <View className="mx-4 mb-9">
          <View className="w-full flex-row justify-evenly rounded-md bg-slate-800 py-2">
            <View className="flex-row items-center gap-3">
              <Feather name="clock" size={20} color="white" />
              <Text className="text-sm font-bold text-white">18 min</Text>
            </View>
            <View className="h-6 w-[1px] bg-neutral-500"></View>
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="lightbulb-outline" size={20} color="white" />
              <Text className="text-sm font-bold text-white">6 key</Text>
            </View>
          </View>
        </View>
        <View className="mx-4 mb-9" style={{ gap: 20 }}>
          <BookDescription />
          <BadgeCategory category={book?.category as string} />
        </View>
        <View className="mb-7 px-4" style={{ gap: 20 }}>
          <Text className="text-2xl font-bold text-white">56 Capítulos</Text>
          <View className="flex-col gap-6">
            <View className="flex-row justify-between">
              <Text className="text-base text-white">01</Text>
              <View className="flex-col justify-between">
                <Text className="text-base font-bold text-white">
                  Introdução
                </Text>
                <Text className="line-clamp-1 text-sm text-neutral-500">
                  Subscribe to unlock all 2 key ideas from book{' '}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="h-9 w-9 items-center justify-center rounded-full bg-white"
              >
                <Feather name="play" size={15} color="black" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-base text-white">02</Text>
              <View className="flex-col justify-between">
                <Text className="text-base font-bold text-white">Criação</Text>
                <Text className="line-clamp-1 text-sm text-neutral-500">
                  Subscribe to unlock all 2 key ideas from book{' '}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
              >
                <Feather name="lock" size={15} color="white" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-base text-white">03</Text>
              <View className="flex-col justify-between">
                <Text className="text-base font-bold text-white">
                  Aplicação
                </Text>
                <Text className="line-clamp-1 text-sm text-neutral-500">
                  Subscribe to unlock all 2 key ideas from book{' '}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
              >
                <Feather name="lock" size={15} color="white" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold text-white">
                Capitulo Final
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                className="h-9 w-9 items-center justify-center rounded-full bg-gray-900"
              >
                <Feather name="lock" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <AuthorProfile author={book?.author as string} />
        <SectionBooks
          books={books.filter(
            (books) =>
              books.category === book?.category && books.isbn !== book?.isbn,
          )}
          title="Livros similares"
        />
      </ScrollView>
    </View>
  )
}

export default Book
