import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
import Veiculo from './components/Veiculo.jsx'
import Venda from './components/Venda.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Veiculo />
    <Venda/>
  </React.StrictMode>,
)
