import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitForElement} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from './App';
import {getReservations} from '../apiCalls';
jest.mock('../apiCalls.js');

describe('App', () => {

  const userInfo = {
    name: 'Collin Kallery',
    date: '5/21',
    time: '12:45',
    number: '6'
  }

  const res1 = {
    name: 'Matthew Horn',
    date: '5/22',
    time: '1:45',
    number: '2'
  }

  const res2 = {
    name: 'Kennedy Roddy',
    date: '5/24',
    time: '2:30',
    number: '10'
  }

  const reservations = [res1, res2];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    getReservations.mockResolvedValueOnce(reservations);
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should be able to make a reservation', async () => {
    getReservations.mockResolvedValueOnce(reservations);

    const {getByPlaceholderText, getByText} = render(<App />)

    const nameInput = getByPlaceholderText('Name');
    fireEvent.change(nameInput, {target: {value: 'Collin Kallery'}});

    const dateInput = getByPlaceholderText('Date');
    fireEvent.change(dateInput, {target: {value: '5/21'}});

    const timeInput = getByPlaceholderText('Time');
    fireEvent.change(timeInput, {target: {value: '12:45'}});

    const guestInput = getByPlaceholderText('Number of Guests');
    fireEvent.change(guestInput, {target: {value: '6'}});

    const submitButton = getByText('Make Reservation');
    fireEvent.click(submitButton);

    const newReservation = await waitForElement(() => getByText('Reservation for Collin Kallery'))

    expect(newReservation).toBeInTheDocument();
  });
});
