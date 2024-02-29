import { render, screen } from '@testing-library/react-native'
import ItemSection from './ItemSection'
import { Entypo } from '@expo/vector-icons'

describe('ItemSection', () => {
  it('should render correctly', () => {
    render(
      <ItemSection>
        <ItemSection.Icon>
          <Entypo name="chevron-right" size={24} color="white" />
        </ItemSection.Icon>
        <ItemSection.Title title="title"></ItemSection.Title>
      </ItemSection>,
    )
  })

  test('without title', () => {
    render(
      <ItemSection>
        <ItemSection.Icon>
          <Entypo name="chevron-right" testID="icon" size={24} color="white" />
        </ItemSection.Icon>
      </ItemSection>,
    )

    expect(screen.getByTestId('icon')).toBeTruthy()
  })

  test('without icon', () => {
    render(
      <ItemSection>
        <ItemSection.Title title="title"></ItemSection.Title>
      </ItemSection>,
    )
    expect(screen.getByText('title')).toBeTruthy()
  })
})
