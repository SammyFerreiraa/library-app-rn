import useNavigationCustom from '@/hooks/useNavigation'

const useHeaderModel = () => {
  const { nav } = useNavigationCustom()
  return { nav }
}

export default useHeaderModel
