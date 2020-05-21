import React from 'react'
import ReactDOM from 'react-dom'
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ReservationForm from './ReservationForm';

describe('Reservation Form', () => {

  const userInfo = {
    name: 'Collin Kallery',
    date: '5/21',
    time: '12:45',
    number: '6',
    id: 163
  }

  it('Should render without crashing', () => {
    const {getByPlaceholderText} = render(<ReservationForm />);

    const name = getByPlaceholderText('Name');

    expect(name).toBeInTheDocument();
  });

  it('Should track the input values', () => {
    const {getByPlaceholderText} = render(<ReservationForm />);

    const nameInput = getByPlaceholderText('Name');

    fireEvent.change(nameInput, {target: {value: 'Collin'}});

    expect(nameInput.value).toEqual('Collin');
  });

  it('Should handle the submit', () => {
    const mockUpdateReservations = jest.fn();

    const {getByPlaceholderText, getByText} = render(<ReservationForm updateReservations={mockUpdateReservations} />)

    const nameInput = getByPlaceholderText('Name');
    fireEvent.change(nameInput, {target: {value: 'Collin'}});

    const dateInput = getByPlaceholderText('Date');
    fireEvent.change(dateInput, {target: {value: '5/21'}});

    const timeInput = getByPlaceholderText('Time');
    fireEvent.change(timeInput, {target: {value: '12:45'}});

    const guestInput = getByPlaceholderText('Number of Guests');
    fireEvent.change(guestInput, {target: {value: '6'}});

    const submitButton = getByText('Make Reservation');
    fireEvent.click(submitButton);

    expect(mockUpdateReservations).toHaveBeenCalled();
    expect(mockUpdateReservations).toHaveBeenCalledWith(userInfo);
  });
});
