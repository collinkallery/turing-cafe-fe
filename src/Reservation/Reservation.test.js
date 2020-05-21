import React from 'react'
import ReactDOM from 'react-dom'
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Reservation from './Reservation';

describe('Reservation', () => {

  const reservation = {
    id: 834,
    name: 'Collin Kallery',
    date: '2/19',
    time: '12:45',
    number: 6,
    key: 834
  }

  it('Should render without crashing', () => {
    const {getByRole} = render(<Reservation {...reservation} />);

    const name = getByRole('reservation-card');

    expect(name).toBeInTheDocument();
  })
})
