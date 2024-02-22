import useBookModel from '../Book.model'

const useProfileModel = () => {
  const { book } = useBookModel()
  return { author: book?.author }
}

export default useProfileModel
