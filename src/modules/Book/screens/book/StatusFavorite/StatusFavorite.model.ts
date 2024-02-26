import axios from 'axios'
import useBookModel from '../Book.model'

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
    const add = async () => {
      try {
        if (!authData?.token) return
        addFavorite({
          id: book?.id as string,
          title: book?.title as string,
          author: book?.author as string,
          category: book?.category as string,
          image: book?.image as string,
          isbn: book?.isbn as string,
        })
        setFavorite(true)
        await axios.post(
          `http://172.25.253.89:3000/favorites`,
          {
            bookId: book?.id,
          },
          {
            headers: {
              Authorization: 'Bearer ' + authData?.token,
            },
          },
        )
      } catch (error) {
        console.log(error)
        removeFavorite(book?.isbn as string)
        setFavorite(false)
      }
    }
    add()
  }

  const removeFav = () => {
    const remove = async () => {
      try {
        if (!authData?.token) return
        removeFavorite(book?.isbn as string)
        setFavorite(false)
        await axios.delete(`http://172.25.253.89:3000/favorites`, {
          headers: {
            Authorization: 'Bearer ' + authData?.token,
          },
          data: {
            bookId: book?.id,
          },
        })
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
    remove()
  }

  return {
    favorite,
    addFav,
    removeFav,
  }
}

export default useStatusFavoriteModel
