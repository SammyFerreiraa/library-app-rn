import useBookModel from '../Book.model'
import apiService from '@/modules/Book/services/apiService'

const useStatusFavoriteModel = () => {
  const {
    book,
    authData,

    addFavorite,
    removeFavorite,

    favorite,
    setFavorite,
  } = useBookModel()

  const addFav = () => {
    const exec = async () => {
      try {
        addFavorite({
          id: book?.id as string,
          title: book?.title as string,
          author: book?.author as string,
          category: book?.category as string,
          image: book?.image as string,
          isbn: book?.isbn as string,
        })
        setFavorite(true)
        await apiService(authData?.token as string).addFavorite(
          book?.id as string,
        )
      } catch (error) {
        console.log(error)
        removeFavorite(book?.isbn as string)
        setFavorite(false)
      }
    }
    exec()
  }

  const removeFav = () => {
    const exec = async () => {
      try {
        removeFavorite(book?.isbn as string)
        setFavorite(false)
        await apiService(authData?.token as string).removeFavorite(
          book?.id as string,
        )
      } catch (error) {
        console.log(error)
        setFavorite(true)
        addFavorite({
          id: book?.id as string,
          title: book?.title as string,
          author: book?.author as string,
          category: book?.category as string,
          image: book?.image as string,
          isbn: book?.isbn as string,
        })
      }
    }
    exec()
  }

  return {
    favorite,
    addFav,
    removeFav,
  }
}

export default useStatusFavoriteModel
