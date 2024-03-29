import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type RentedProps = {
  id: string
  title: string
  author: string
  category: string
  image: string
  isbn: string
  copy: {
    id: string
    available: boolean
    book: {
      id: string
      title: string
      author: string
      isbn: string
      delays: number
      image: string
      recommended: boolean
      category: string
    }
  }
  rental: {
    id: string
    rentedAt: string | null
    returnedAt: string | null
    delay: number
    copy: {
      id: string
      available: boolean
      book: {
        id: string
        title: string
        author: string
        isbn: string
        delays: number
        image: string
        recommended: boolean
        category: string
      }
    }
  }
}
interface useRentedProps {
  Rented: RentedProps[]
  setRented: (books: RentedProps[]) => void
  addRented: (rental: RentedProps) => void
  returnRented: (rental: RentedProps) => void
}

export const useRented = create(
  persist<useRentedProps>(
    (set) => ({
      Rented: [],
      setRented: (Rented) => set({ Rented }),
      addRented: (rental) =>
        set((state) => ({ Rented: [...state.Rented, rental] })),
      returnRented: (rental) => {
        set((state) => ({
          Rented: state.Rented.filter((book) => book.id !== rental.id),
        }))
      },
    }),
    {
      name: 'rented',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
