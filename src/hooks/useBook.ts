import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type bookProps = {
  id: string
  title: string
  author: string
  isbn: string
  delays: number
  image: string
  recommended: boolean
  category: string
}
interface useBookProps {
  books: bookProps[]
  setBooks: (books: bookProps[]) => void
}

export const useBook = create(
  persist<useBookProps>(
    (set) => ({
      books: [],
      setBooks: (books) => set({ books }),
    }),
    {
      name: 'books',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
