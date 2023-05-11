import {Component} from 'react'

class Latest extends Component {
  reset = () => {
    const {first1, mani} = this.props
    const {scoring, clicked} = first1
    mani(clicked)
  }

  render() {
    const {first1} = this.props
    const {scoring, clicked} = first1
    console.log(clicked)
    return (
      <div className="next-bg">
        <div className="oneofcenter">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
        </div>
        <p>Your Score</p>
        <p>{scoring}</p>
        <button onClick={this.reset} className="bittu">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p>Play Again</p>
        </button>
      </div>
    )
  }
}

export default Latest
