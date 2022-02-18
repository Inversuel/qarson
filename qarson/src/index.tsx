import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.scss'
import {MyProvider} from './helpers/carContext'

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
     <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
