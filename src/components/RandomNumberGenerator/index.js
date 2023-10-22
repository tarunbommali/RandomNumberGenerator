// TARUNBOMMALI
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">Generate a number in the range of 100 </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <h1 className="random-number">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
