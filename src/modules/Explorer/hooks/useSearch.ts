import { create } from 'zustand'

type useSearchProps = {
  search: string
  setSearch: (search: string) => void
}

export const useSearch = create<useSearchProps>((set) => ({
  search: '',
  setSearch: (search: string) => set({ search }),
}))
