import {Component} from 'react'

class Images extends Component {
  buttonClick = () => {
    const {iterationofimages, randomness} = this.props
    const {thumbnailUrl, id} = iterationofimages
    randomness(id)
  }

  render() {
    const {iterationofimages} = this.props
    const {thumbnailUrl} = iterationofimages
    return (
      <li className="lista">
        <button onClick={this.buttonClick} className="bitton">
          <img alt="thumbnail" src={thumbnailUrl} className="thumbnail-photo" />
        </button>
      </li>
    )
  }
}

export default Images
