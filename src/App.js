
import { useState } from 'react';
import './App.css';
import data from "./data.json"
import BookingGrid from './components/BookingGrid';
function BookMyShow() {
  const [bookingdata,setBookingData] = useState(data)
  return (
    <div className="Bookmyshow">
   
    <BookingGrid bookingdata = {bookingdata}/>
    </div>
  );
}

export default BookMyShow;
