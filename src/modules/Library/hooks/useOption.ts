import { create } from 'zustand'

type useOptionsProps = {
  options: string
  setOptions: (search: string) => void
}

export const useOptions = create<useOptionsProps>((set) => ({
  options: 'Salvos',
  setOptions: (options: string) => set({ options }),
}))
