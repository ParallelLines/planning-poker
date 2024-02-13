import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PockerApp from './PockerApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PockerApp />
  </BrowserRouter>,
)
