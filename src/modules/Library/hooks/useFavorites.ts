import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export type FavoriteProps = {
  id: string
  title: string
  author: string
  isbn: string
  image: string
  category: string
}
interface useFavoriteProps {
  Favorites: FavoriteProps[]
  setFavorites: (books: FavoriteProps[]) => void
  addFavorite: (favorite: FavoriteProps) => void
  removeFavorite: (id: string) => void
}

export const useFavorites = create(
  persist<useFavoriteProps>(
    (set) => ({
      Favorites: [],
      setFavorites: (Favorites) => set({ Favorites }),
      removeFavorite: (isbn) =>
        set((state) => ({
          Favorites: state.Favorites.filter((book) => book.isbn !== isbn),
        })),
      addFavorite: (favorite) =>
        set((state) => ({ Favorites: [...state.Favorites, favorite] })),
    }),
    {
      name: 'favorites',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
