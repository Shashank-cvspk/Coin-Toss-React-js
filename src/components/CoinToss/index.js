// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    head: 0,
    tail: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  Toss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevstate => ({
        count: prevstate.count + 1,
        head: prevstate.head + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevstate => ({
        count: prevstate.count + 1,
        tail: prevstate.tail + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {count, head, tail, imgUrl} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Head (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="img-size" />
          <button type="button" className="btn" onClick={this.Toss}>
            Toss Coin
          </button>
          <div className="result">
            <p>Total:{count}</p>
            <p>Heads:{head}</p>
            <p>Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
