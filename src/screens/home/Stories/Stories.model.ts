import { useBook } from '@/hooks/useBook'

const useStoriesModel = () => {
  const { books } = useBook()
  return { books }
}

export default useStoriesModel
