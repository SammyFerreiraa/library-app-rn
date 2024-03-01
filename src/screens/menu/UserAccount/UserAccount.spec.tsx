import { render, screen } from '@testing-library/react-native'
import UserAccountView from './UserAccount.view'

const authData = {
  user: {
    id: '1234',
    name: 'sammy',
    email: 'sammy@gmail.com',
    address: 'rua',
    city: 'cidade',
    delays: 0,
    books: [] as never,
  },
  token: 'string',
}

const renderComponent = () => {
  return render(<UserAccountView authData={authData} />)
}

describe('User Account', () => {
  beforeEach(() => {
    renderComponent()
  })

  it('should render correctly', () => {
    expect(screen.getByText('Premium')).toBeTruthy()
  })
  it('should render correctly infos', () => {
    expect(screen.getByText(authData.user.name)).toBeTruthy()
    expect(screen.getByText(authData.user.email)).toBeTruthy()
  })
})
