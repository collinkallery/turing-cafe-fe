import React from 'react';
import './Reservation.css';

const Reservation = (props) => {
  return (
    <section className="reservation-card">
      <h3>Reservation for {props.name}</h3>
      <section className="reservation-details-container">
        <h4>Reservation Details:</h4>
          <p>Date: {props.date}</p>
          <p>Time: {props.time}</p>
          <p>Number: {props.number}</p>
          <p>ID: {props.id}</p>
      </section>
    </section>
  )
}

export default Reservation;
