import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PockerApp from './PockerApp'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './components/ErrorPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorPage message={'something reeeeeally went wrong :('} />}>
      <PockerApp />
    </ErrorBoundary>
  </BrowserRouter>,
)
