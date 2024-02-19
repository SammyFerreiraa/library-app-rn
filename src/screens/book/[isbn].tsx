import { useBook } from '@/hooks/useBook'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons'
import { SectionBooks } from '@/components/section-books'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'

const Book = () => {
  const scrollViewRef = useRef<ScrollView>(null)
  const { authData } = useAuth()
  const [favorite, setFavorite] = useState<boolean | undefined>(undefined)
  const { books } = useBook()
  const { Favorites, addFavorite, removeFavorite } = useFavorites()
  const { isbn } = useLocalSearchParams()
  const book = books.find((book) => book.isbn === isbn)

  useEffect(() => {
    if (Favorites.some((book) => book.isbn === isbn)) setFavorite(true)
    else setFavorite(false)
    scrollViewRef.current?.scrollTo({ y: 0, animated: true })
  }, [book?.isbn, Favorites, isbn])

  const removeFav = () => {
    const remove = async () => {
      try {
        if (!authData?.token) return
        if (!book?.id) return
        removeFavorite(book?.id)
        setFavorite(false)
        await axios.delete(`http://10.0.0.106:3000/favorites`, {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
          data: {
            bookId: book.id,
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
        if (!book?.id) return
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
        removeFavorite(book?.id as string)
        setFavorite(false)
      }
    }
    add()
  }

  return (
    <View className="flex-1 bg-black pb-[68px]">
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 pt-5"
      >
        <View className="relative mx-4 mb-8 items-center justify-center pt-24">
          <Image
            source={{ uri: book?.image }}
            alt={book?.title}
            className="h-[220px] w-[153px]"
          />
          <View className="absolute -bottom-2 w-full flex-row justify-evenly rounded-md bg-slate-800 py-4">
            <TouchableOpacity
              className="flex-row items-center gap-3"
              activeOpacity={0.7}
            >
              <Feather name="book" size={24} color="white" />
              <Text className="text-base font-bold text-white">Read Nexus</Text>
            </TouchableOpacity>
            <View className="h-6 w-[1px] bg-neutral-500"></View>
            <TouchableOpacity
              className="flex-row items-center gap-3"
              activeOpacity={0.7}
            >
              <Feather name="headphones" size={24} color="white" />
              <Text className="text-base font-bold text-white">Play Nexus</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-4 mb-8">
          <View className="flex-row items-center justify-between">
            <Text className="text-3xl font-bold text-white">{book?.title}</Text>
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
        <View className="mx-4 mb-9">
          <View className="gap-3">
            <Text className="text-xl font-bold text-white">
              Sobre este livro
            </Text>
            <Text className="text-base leading-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              nisi? Cumque consequuntur animi, in a blanditiis unde perferendis
              dicta dolore ratione deleniti, praesentium nemo dolor sint eveniet
              doloribus nostrum perspiciatis.
            </Text>
          </View>
          <View className="flex-row gap-2 pt-5">
            <View className="rounded-lg bg-[#313333] px-4 py-2">
              <Text className="text-white">{book?.category}</Text>
            </View>
          </View>
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
        <View
          className="mx-4 mb-9 flex-row overflow-hidden rounded-xl bg-gray-900 p-4"
          style={{ gap: 16 }}
        >
          <Image
            source={require('../../utils/images/perfil.png')}
            className="h-14 w-14 rounded-full"
            alt="perfil"
          />
          <View className="flex-col" style={{ width: '83%' }}>
            <Text className="text-base font-bold text-white">
              {book?.author}
            </Text>
            <Text className="text-white">
              Sua carreira envolve a elaboração de livros, artigos, críticas,
              resenhas, crônicas, entre diversos outros gêneros textuais.
            </Text>
          </View>
        </View>
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
