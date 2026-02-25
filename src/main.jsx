import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import './main.css'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes.js'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)