import useCategoryModel from './Category.model'
import CategoryView from './Category.view'

export default function Categories() {
  return <CategoryView {...useCategoryModel()} />
}
