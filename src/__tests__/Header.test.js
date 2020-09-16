//since we are testing a component, we are importing React.
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

//Testing to see that the component does not show drop down when mounted.
it('Does not show dropdown when moounted', () => {
  //A giant object gets returned from this render. 
  const { queryByTestId } = render(<Header />)

  const dropdown = queryByTestId('dropdown')

  expect(dropdown).not.toBeTruthy()
})

it('Shows dropdown when hamburger is clicked', () => {
  const { container, getByTestId } = render(<Header />)

  const hamburger = getByTestId('hamburger-button')

  fireEvent.click(hamburger)

  expect(container.textContent).toContain('Dropdown menu')
})