import React from 'react'
import { render } from '@testing-library/react'
import App from '../App';
import { renderWithRedux } from './utils'

describe('<App/>', () => {
  test('renders app correctly', () => {
    const { getByTestId } = render(renderWithRedux(<App />))

    expect(getByTestId('App')).toBeTruthy()
  });

  test('renders a header', () => {
    const { getByTestId } = render(renderWithRedux(<App />))

    expect(getByTestId('header')).toBeTruthy()
  });

})
