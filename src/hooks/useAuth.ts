import axios from 'axios'
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
  signIn: (email: string, password: string) => Promise<userData>
  signOut: () => Promise<void>
}

export const useAuth = create<useAuthProps>((set) => ({
  authData: undefined,
  signIn: async (email: string, password: string) => {
    const res = await axios.post('http://localhost:3000/login', {
      email,
      password,
    })
    set({ authData: res.data })
    return res.data
  },
  signOut: async () => {
    set({ authData: undefined })
  },
}))
