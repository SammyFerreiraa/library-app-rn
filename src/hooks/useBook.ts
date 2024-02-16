import { create } from 'zustand'

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

export const useBook = create<useBookProps>((set) => ({
  books: [],
  setBooks: (books) => set({ books }),
}))
