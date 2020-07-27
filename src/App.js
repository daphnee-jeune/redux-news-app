import React from 'react'
import './App.css'
import './index.css'

//image
import image from "../src/header.svg"

import Store from "./store/Store"
import {Provider} from "react-redux"

import {Link} from "react-router-dom"
//routes
import Routes from "./routes"

function App() {
  return (
    <Provider store={Store}>

      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/tech">Tech</Link></li>
          </ul>
        </nav>
        <header>
          <h1>Our World Today</h1>
          <img src={image} alt="" />
        </header>
    

        <main>
          <Routes />
        </main>
      </div>

    </Provider>

  )
}

export default App