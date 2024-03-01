import { render, screen } from '@testing-library/react-native'
import BannerView from './Banner.view'

const renderComponent = () => {
  return render(<BannerView />)
}

test('should render correctly', () => {
  renderComponent()
  expect(
    screen.getByText('Ganhe acesso ilimitado a todos os livros por apenas'),
  ).toBeTruthy()
  expect(screen.getByText('R$10,99')).toBeTruthy()
  expect(screen.getByText('*Termos e condições aplicados')).toBeTruthy()
})
