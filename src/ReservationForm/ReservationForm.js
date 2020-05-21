import React, {Component} from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numberGuests: '',
      id: ''
    }
  }

  trackInput = (e) => {
    const keyword = e.target.id;
    this.setState({[keyword]: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({id: this.generateRandomId()})
    this.props.updateReservations(this.state);
  }

  generateRandomId = () => {
    let randomId = Math.round(Math.random() * 100000)
    return randomId;
  }

  render() {
    return (
      <section className="reservation-form">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            onChange={this.trackInput}
            id="name"
            placeholder="Name"
            className="reservation-input"
          />
          <input
            required
            onChange={this.trackInput}
            id="date"
            placeholder="Date"
            className="reservation-input"
          />
          <input
            required
            onChange={this.trackInput}
            id="time"
            placeholder="Time"
            className="reservation-input"
          />
          <input
            required
            onChange={this.trackInput}
            id="numberGuests"
            placeholder="Number of Guests"
            className="reservation-input"
          />
          <button className="submit-button">Make Reservation</button>
        </form>
      </section>
    )
  }
}

export default ReservationForm;
