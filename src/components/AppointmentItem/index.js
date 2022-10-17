// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {id, name, date, isFavorite} = appointmentDetails

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const formedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-list-container">
      <div className="appointment-details-card">
        <p className="title">{name}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
          testid="star"
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
      <p className="date">{formedDate}</p>
    </li>
  )
}

export default AppointmentItem
