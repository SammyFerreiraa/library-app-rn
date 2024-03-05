import { fireEvent, render, screen } from '@testing-library/react-native'
import OptionsSelectView from './SectionOptions.view'

const OptionSectionModel = {
  options: 'Salvos',
  setOptions: jest.fn(),
}

test('Section Option', () => {
  render(<OptionsSelectView {...OptionSectionModel} />)

  fireEvent.press(screen.getByText('Livros Salvos'))
  expect(OptionSectionModel.setOptions).toHaveBeenCalledWith('Salvos')

  fireEvent.press(screen.getByText('Lendo atualmente'))
  expect(OptionSectionModel.setOptions).toHaveBeenCalledWith('Progresso')

  fireEvent.press(screen.getByText('Lidos'))
  expect(OptionSectionModel.setOptions).toHaveBeenCalledWith('Completos')
})
