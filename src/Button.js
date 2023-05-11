import {Component} from 'react'

class Button extends Component {
  clickingButton = () => {
    const {iterationofbitta, changing} = this.props
    const {displayText, tabId} = iterationofbitta
    changing(tabId)
  }

  render() {
    const {iterationofbitta} = this.props
    const {displayText} = iterationofbitta
    return (
      <li>
        <button onClick={this.clickingButton}>{displayText}</button>
      </li>
    )
  }
}

export default Button
