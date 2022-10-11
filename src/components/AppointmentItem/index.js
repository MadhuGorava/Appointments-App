// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {id, name, date, isFavorite} = appointmentDetails

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="appointment-list-container">
      <div className="appointment-details-card">
        <h1 className="title">{name}</h1>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
          testid="star"
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default AppointmentItem
