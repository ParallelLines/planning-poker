import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PockerApp from './PockerApp'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <BrowserRouter>
      <PockerApp />
    </BrowserRouter>
  </CookiesProvider>,
)
