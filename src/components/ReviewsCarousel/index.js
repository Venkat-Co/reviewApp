import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {length: 0}

  changeNextSlide = () => {
    const {length} = this.state
    const {reviewsList} = this.props
    if (length < reviewsList.length - 1) {
      this.setState({
        length: length + 1,
      })
    }
  }

  changePrevSlide = () => {
    const {length} = this.state
    if (length > 0) {
      this.setState({
        length: length - 1,
      })
    }
  }

  render() {
    const {reviewsList} = this.props
    const {length} = this.state
    if (
      reviewsList.length === 0 ||
      length < 0 ||
      length >= reviewsList.length
    ) {
      return null
    }

    const {imgUrl, username, description, companyName} = reviewsList[length]

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Reviews</h1>
          <div className="card-container">
            <div>
              <button
                className="btn"
                type="button"
                onClick={this.changePrevSlide}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow "
                  className="btn-img"
                />
              </button>
            </div>
            <div className="container">
              <img src={imgUrl} alt={username} className="image" />
              <p className="heading">{username}</p>
              <p className="company">{companyName}</p>
              <p className="desc">{description}</p>
            </div>
            <div>
              <button
                className="btn"
                onClick={this.changeNextSlide}
                type="button"
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                  alt="right arrow "
                  className="btn-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewCarousel
