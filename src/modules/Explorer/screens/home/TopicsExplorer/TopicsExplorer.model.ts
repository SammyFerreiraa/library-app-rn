import useNavigationCustom from '@/hooks/useNavigation'

const useTopicsExplorerModel = () => {
  const { nav } = useNavigationCustom()
  return { nav }
}

export default useTopicsExplorerModel
