import useSectionAccountModel from './SectionAccount.model'
import SectionAccountView from './SectionAccount.view'

const SectionsAccount = () => {
  return <SectionAccountView {...useSectionAccountModel()} />
}

export default SectionsAccount
