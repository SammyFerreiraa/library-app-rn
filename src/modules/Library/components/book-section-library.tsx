import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from 'expo-router'
import { TouchableOpacity, View, Image, Text } from 'react-native'

type BookSectionLibraryProps = {
  book: {
    id: string
    image: string
    title: string
    author: string
    isbn: string
    rentedAt?: string
    returnedAt?: string
  }
}

type RootStackParamList = {
  book: { isbn: string } | undefined
}

export default function BookSectionLibrary({ book }: BookSectionLibraryProps) {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <TouchableOpacity
      key={book.id}
      activeOpacity={0.9}
      className="w-[40%]"
      onPress={() => nav.navigate('book', { isbn: book.isbn })}
    >
      <View className="mb-10">
        <Image
          source={{ uri: book.image }}
          alt={book.title}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 270,
            marginBottom: 16,
          }}
        />
        <Text className="text-left font-medium text-white" numberOfLines={1}>
          {book.title}
        </Text>
        <Text className="mb-1 text-left text-gray-400" numberOfLines={1}>
          {book.author}
        </Text>
        {book.rentedAt && (
          <>
            <Text className="text-left text-gray-400" numberOfLines={1}>
              Alugado: {new Date(book.rentedAt).toLocaleDateString('pt-BR')}{' '}
            </Text>
            <Text className="mb-1 text-left text-gray-400" numberOfLines={1}>
              Horário: {new Date(book.rentedAt).toLocaleTimeString('pt-BR')}
            </Text>
          </>
        )}
        {book.returnedAt && (
          <>
            <Text className="text-left text-gray-400" numberOfLines={1}>
              Devolvido: {new Date(book.returnedAt).toLocaleDateString('pt-BR')}{' '}
            </Text>
            <Text className="text-left text-gray-400" numberOfLines={1}>
              Horário: {new Date(book.returnedAt).toLocaleTimeString('pt-BR')}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}
