import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import ReservationForm from '../ReservationForm/ReservationForm';
import {getReservations} from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    getReservations()
      .then(data => this.setState({reservations: data}))
      .catch(err => console.error(err));
  }

  updateReservations = (newReservation) => {
    console.log(newReservation);
    this.setState({
      reservations: [...this.state.reservations, newReservation]
    })
  }

  render() {
    return (
      <div className="App">
        <section className="app-header">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
        </section>
        <ReservationForm updateReservations={this.updateReservations} />
        <ReservationContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
