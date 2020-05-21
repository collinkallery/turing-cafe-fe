import React from 'react';
import './ReservationContainer.css';
import Reservation from '../Reservation/Reservation';

const ReservationContainer = ({reservations}) => {

  const reservationsToDisplay = reservations.map(reservation => {
    return (
      <Reservation
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        key={reservation.id}
      />
    )
  })

  return (
    <section className="reservation-container">
      {reservationsToDisplay}
    </section>
  )
}

export default ReservationContainer;
