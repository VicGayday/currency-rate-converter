import axios from 'axios';
import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"

import Header from './components/header/Header'
import Root from "./components/root";
import "./App.css";
import { CurrentContext } from './context'

function App() {
  const [currency, setCurrency] = useState('USD')
  const [rate, setRate] = useState({})

  useEffect(() => {
    const lang = navigator.language
    if (/^ru\b/.test(lang)) {
      setCurrency('RUB')
    }
  }, [])

  useEffect(() => {
    axios(
      " http://api.currencylayer.com/live?access_key=0ff35e7d84055ae75ea66030766e36be&format=1"
    )
      .then((response) => {
        console.log(response.data);
        setRate(response.data.quotes);
      })
      .catch((err) => console.log(`Что-то пошло не так ${err}`));
  }, [])

  return (
    <CurrentContext.Provider value={{
      currency,
      setCurrency,
      rate,
      setRate
    }}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Root />
        </div>
      </BrowserRouter>
    </CurrentContext.Provider>
  )
}

export default App;
