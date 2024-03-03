import { render } from '@testing-library/react-native'
import InfosView from './Infos.view'
import { View } from 'react-native'

test('Infos Book', () => {
  const infos = render(
    <InfosView title="title" author="author">
      <View></View>
      <View></View>
      <View></View>
    </InfosView>,
  )

  expect(infos.getByText('title')).toBeTruthy()
  expect(infos.getByText('author')).toBeTruthy()
  expect(infos.UNSAFE_getAllByType(View)).toHaveLength(2 + 3)
})
