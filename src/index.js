import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { AppProvider } from './context'
//import store and provider
import { Provider } from 'react-redux'
import store from './store'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
)
