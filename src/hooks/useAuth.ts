import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
