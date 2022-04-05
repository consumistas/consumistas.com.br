import React, { Component } from 'react'

import './app.css'
import logo from './logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">  
        <h3 class="texto"><a href="http://www.consumistas.com.br">consumistas.com.br</a></h3>
          <h1 class="texto">
            Site em desenvolvimento :)
          </h1>
          <h2><a id="urlRepo" href="https://github.com/consumistas/consumistas.com.br">Repositório no github</a></h2>


        </header>
        <h3>Deseja contribuir? chama no telegram: @freitasdevjr</h3>
      </div>
    )
  }
}

export default App
