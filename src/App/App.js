import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
