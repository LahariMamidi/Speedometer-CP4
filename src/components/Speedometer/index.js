// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrakesApplied = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="page-bg">
        <h1 className="page-head">SPEEDOMETER</h1>
        <img
          className="page-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="page-desc">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button type="button" className="btn1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onBrakesApplied}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
