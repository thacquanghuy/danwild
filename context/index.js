import { createContext, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  let appState = {
    cart: {
      items: [],
      shown: false,
    },
  }

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
