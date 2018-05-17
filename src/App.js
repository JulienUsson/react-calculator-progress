import React, { Component } from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import CalculatorProgress from './CalculatorProgress'

class App extends Component {
  render() {
    return (
      <div>
        <GitHubForkRibbon
          position="right"
          color="red"
          href="https://github.com/JulienUsson/react-calculator-progress"
          target="_blank"
        >
          Fork me on GitHub
        </GitHubForkRibbon>

        <CalculatorProgress />
      </div>
    )
  }
}

export default App
