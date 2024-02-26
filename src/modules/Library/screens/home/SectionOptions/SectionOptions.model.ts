import { useOptions } from '@/modules/Library/hooks/useOption'

const useSectionOptionsModel = () => {
  const { options, setOptions } = useOptions()
  return { options, setOptions }
}

export default useSectionOptionsModel
