import React, { Component } from "react"
import logo from "./assets/star-wars-episode-7-image.jpg"
import "./App.css"
import ListCards from "./components/ListCards"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      targets: [
        {
          name: "Leia Organa",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/5.jpg"
        },
        {
          name: "C-3PO",
          status: "alive",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/2.jpg"
        },
        {
          name: "Biggs Darklighter",
          status: "dead",
          picture:
            "https://starwars-visualguide.com/assets/img/characters/9.jpg"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to shooting App of heroes</h1>
        </header>
        <p className="App-intro">To kill your hero, just clic on "kill".</p>
        <ListCards targets={this.state.targets} />
      </div>
    )
  }
}

export default App
