import { create } from 'zustand'

interface useUserProps {
  email?: string
  name?: string
  setEmail: (email: string) => void
  setName: (name: string) => void
}

export const useUser = create<useUserProps>((set) => ({
  email: undefined,
  name: undefined,
  setEmail: (email: string) => set({ email }),
  setName: (name: string) => set({ name }),
}))
