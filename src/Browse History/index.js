import {Component} from 'react'

import BrowseItem from '../BrowseItem'

import './index.css'

class BrowseHistory extends Component {
  state = {searchInput: '', HistoryDetails: this.props}

  onChangeSearchEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteLine = id => {
    const {HistoryDetails} = this.state
    const {initialHistoryList} = HistoryDetails
    console.log(initialHistoryList)
    const filteredData = initialHistoryList.filter(each => each.id !== id)

    this.setState({HistoryDetails: filteredData})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput, HistoryDetails} = this.state
    const searchResult = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let value = ''
    value = searchResult.length !== 0 ? '' : 'There is no history to show'

    return (
      <div className="bg-container">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-icon-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="input"
              placeholder="Search history"
              onChange={this.onChangeSearchEvent}
              value={searchInput}
              type="search"
            />
          </div>
        </div>
        <div className="bottom-container">
          <ul className="card">
            {initialHistoryList.map(each => (
              <BrowseItem
                historyDetails={each}
                key={each.id}
                onDeleteLine={this.onDeleteLine}
              />
            ))}
            <p className="empty">{value}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowseHistory
