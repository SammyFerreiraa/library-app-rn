import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type CompletedRentalProps = {
  id: string
  rentedAt: string
  returnedAt: string
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
interface useLibraryProps {
  completedRentals: CompletedRentalProps[]
  setCompletedRentals: (books: CompletedRentalProps[]) => void
}

export const useCompletedRentals = create(
  persist<useLibraryProps>(
    (set) => ({
      completedRentals: [],
      setCompletedRentals: (completedRentals) => set({ completedRentals }),
    }),
    {
      name: 'completed-rentals',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
