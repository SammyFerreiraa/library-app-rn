import { render } from '@testing-library/react-native'
import Story from './story'

test('should render correctly', () => {
  render(<Story id="id" image="image" title="title" />)
})
