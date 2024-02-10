import { create } from 'zustand'

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

export const useAuth = create<useAuthProps>((set) => ({
  authData: undefined,
  signIn: (user: userData) => {
    set({ authData: user })
  },
  signOut: async () => {
    set({ authData: undefined })
  },
}))
