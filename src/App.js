import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from './components/header/Header'
import RouteComponent from './routes'
import "./App.css";

function App() {
  return (
  <BrowserRouter>
  <Header />
  <RouteComponent />
  </BrowserRouter>
)
}

export default App;
