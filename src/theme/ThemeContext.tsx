import { createContext } from 'react'

const defaultState = {
  auto: false,
  dark: false,
  toggleDark: () => {},
  toggleAuto: () => {},
}

const ThemeContext = createContext(defaultState)

export { ThemeContext }
