import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Fondo from './modules/form/fondo/fondo'
import Form from './modules/form/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Fondo/>
    <Form />
  </React.StrictMode>,
)
