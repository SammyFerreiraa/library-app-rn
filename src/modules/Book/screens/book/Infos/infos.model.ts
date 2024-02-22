import useBookModel from '../Book.model'

const useInfosModel = () => {
  const { book } = useBookModel()

  return {
    title: book?.title as string,
    author: book?.author as string,
  }
}

export default useInfosModel
