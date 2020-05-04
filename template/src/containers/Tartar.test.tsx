import React from 'react'
import { render } from '@testing-library/react'
import Tartar from './Tartar'

test('renders learn react link', () => {
  const { getByText } = render(<Tartar />)
  const linkElement = getByText(/Have a try/i)
  expect(linkElement).toBeInTheDocument()
})
