import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google"
          className="google-image"
        />
        <div className="card-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-image"
              alt="search"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
            />
            {suggestionsList.map(each => (
              <SuggestionItem item={each} key={each.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
