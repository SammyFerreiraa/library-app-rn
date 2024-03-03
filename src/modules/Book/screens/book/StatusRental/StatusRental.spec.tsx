import { fireEvent, render } from '@testing-library/react-native'
import StatusRentalView from './StatusRental.view'

const data = {
  returnBook: jest.fn(),
  rentalBook: jest.fn(),
  image: 'image',
  title: 'title',
}

const renderComponent = ({
  rental,
  loading,
}: {
  rental: boolean
  loading: boolean
}) => {
  return render(
    <StatusRentalView rental={rental} loading={loading} {...data} />,
  )
}

describe('StatusRental', () => {
  it('should render correctly', () => {
    renderComponent({
      rental: true,
      loading: false,
    })
  })

  it('loading should render correctly', () => {
    const component = renderComponent({
      rental: true,
      loading: true,
    })

    expect(component.queryByText('Livro Alugado')).toBeNull()
  })

  it('loading should render correctly', () => {
    const component = renderComponent({
      rental: false,
      loading: true,
    })

    expect(component.queryByText('Alugar Livro')).toBeNull()
  })

  it('rentalBook', () => {
    const component = renderComponent({
      rental: false,
      loading: false,
    })

    fireEvent.press(component.getByTestId('rental-book'))

    expect(data.rentalBook).toHaveBeenCalled()
    expect(component.queryByText('Livro alugado')).toBeNull()
  })

  it('returnBook', () => {
    const component = renderComponent({
      rental: true,
      loading: false,
    })

    fireEvent.press(component.getByTestId('return-book'))

    expect(data.returnBook).toHaveBeenCalled()
    expect(component.queryByText('Alugar Livro')).toBeNull()
  })
})
