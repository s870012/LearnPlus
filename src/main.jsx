import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.min.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App.jsx'

import routes from './routes/index.jsx'

const router = createHashRouter( routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
