import useBookModel from '../Book.model'

const useDescriptionModel = () => {
  const { book } = useBookModel()
  return { category: book?.category as string }
}

export default useDescriptionModel
