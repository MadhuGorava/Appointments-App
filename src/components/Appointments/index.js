// Write your code here
import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

// Write your code here
const initialAppointmentsList = []

class Appointments extends Component {
  state = {appointmentsList: initialAppointmentsList, name: '', date: ''}

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isFavorite: !eachAppointment.isFavorite}
        }
        return eachAppointment
      }),
    }))
  }

  onDisplay = () => {
    const {appointmentsList} = this.state
    const filteredCommentsList = appointmentsList.filter(
      eachComment => eachComment.isFavorite === true,
    )
    this.setState({appointmentsList: filteredCommentsList})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newAppointment = {
      id: uuidv4,
      name,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      name: '',
      date: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
    const date = event.target.value
    const formatDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
    this.setState({date: formatDate})
  }

  render() {
    const {appointmentsList, name, date} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Add Appointment</h1>
        <div className="container">
          <div className="form-container">
            <div className="image-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="comment-image"
              />
            </div>
            <div className="form-item-container">
              <form>
                <label htmlFor="inputText">Title</label>
                <input
                  type="text"
                  id="inputText"
                  placeholder="Title"
                  value={name}
                  className="name-input"
                  onChange={this.onChangeName}
                />
                <br />
                <label htmlFor="inputDate">Date</label>
                <input
                  id="inputDate"
                  type="date"
                  className="desc-text"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <br />
                <button
                  type="button"
                  onClick={this.onAddAppointment}
                  className="add-button"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <hr className="line" />
          <div className="button-card">
            <h1 className="button-heading">Appointments</h1>
            <button
              type="button"
              onClick={this.onDisplay}
              className="star-button"
            >
              Starred
            </button>
          </div>
          <ul className="list-item-container">
            {appointmentsList.map(eachComment => (
              <AppointmentItem
                key={eachComment.id}
                appointmentDetails={eachComment}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
