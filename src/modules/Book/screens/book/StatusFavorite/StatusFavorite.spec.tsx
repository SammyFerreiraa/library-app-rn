import { fireEvent, render, screen } from '@testing-library/react-native'
import StatusFavoriteView from './StatusFavorite.view'

const dataFav = {
  favorite: true,
  addFav: jest.fn(),
  removeFav: jest.fn(),
}

const renderComponentFavorite = () => {
  return render(<StatusFavoriteView {...dataFav} />)
}
const renderComponentNoFavorite = () => {
  return render(<StatusFavoriteView {...dataFav} favorite={false} />)
}

describe('StatusFavorite', () => {
  it('should render correctly', () => {
    renderComponentFavorite()
    renderComponentNoFavorite()
    expect(renderComponentFavorite).toBeTruthy()
    expect(renderComponentNoFavorite).toBeTruthy()
  })

  it('should call addFav on press', () => {
    renderComponentNoFavorite()
    fireEvent.press(screen.getByTestId('add-favorite'))
    expect(dataFav.addFav).toHaveBeenCalled()
  })

  it('should call removeFav on press', () => {
    renderComponentFavorite()
    fireEvent.press(screen.getByTestId('remove-favorite'))
    expect(dataFav.removeFav).toHaveBeenCalled()
  })
})
