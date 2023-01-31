import './index.css'

const BrowseItem = props => {
  const {historyDetails, onDeleteLine} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteHistory = () => {
    onDeleteLine(id)
  }

  return (
    <li className="item-container">
      <p className="date">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domineUrl">{domainUrl}</p>
      </div>
      <button onClick={onDeleteHistory} type="button" className="delete-icon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowseItem
