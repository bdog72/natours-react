import React, { Component } from 'react'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
      </div>
    )
  }
}

export default App
