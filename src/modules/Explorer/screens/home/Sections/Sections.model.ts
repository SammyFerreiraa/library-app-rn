import { useBook } from '@/hooks/useBook'

const useSectionsModel = () => {
  const { books } = useBook()
  return { books }
}

export default useSectionsModel
