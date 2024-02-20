import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRented } from '@/modules/Library/hooks/useRented'
import { useFavorites } from '@/modules/Library/hooks/useFavorites'
import { useCompletedRentals } from '@/modules/Library/hooks/useCompletedRentals'

interface userData {
  user: {
    id: string
    name: string
    email: string
    address: string
    city: string
    delays: number
    books: []
  }
  token: string
}

interface useAuthProps {
  authData?: userData
  signIn: (user: userData) => void
  signOut: () => Promise<void>
}

export const useAuth = create(
  persist<useAuthProps>(
    (set) => ({
      authData: undefined,
      signIn: (user: userData) => {
        set({ authData: user })
      },
      signOut: async () => {
        set({ authData: undefined })
        useRented.getState().setRented([])
        useFavorites.getState().setFavorites([])
        useCompletedRentals.getState().setCompletedRentals([])
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
