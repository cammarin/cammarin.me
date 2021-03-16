import { createContext, useEffect, useState } from 'react'

const AppContext = createContext({ mounted: false })

type AppProviderProps = React.PropsWithChildren<{}>

const AppProvider = ({ children }: AppProviderProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <AppContext.Provider value={{ mounted }}>{children}</AppContext.Provider>
  )
}

export { AppProvider }
export default AppContext
