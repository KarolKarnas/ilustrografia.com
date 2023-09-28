import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import HeadingAccent from './HeadingAccent'

test('renders a text', () => {
  const text = `Hello there friend`
  render(<HeadingAccent>{text}</HeadingAccent>)

// const element  = screen.getByText(text)
const element  = screen.getByText(text)
const elementRole  = screen.getByRole('contentinfo')
expect(element).toBeDefined()
expect(element).toBeInTheDocument()
expect(element).toHaveTextContent(text)

expect(element).toHaveAttribute('role', 'contentinfo')

expect(elementRole).toHaveTextContent(text)
expect(elementRole).not.toHaveTextContent('dsadas')



})