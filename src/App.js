

import './App.css';
import data from "./data.json"
import BookingGrid from './components/BookingGrid';
function BookMyShow() {
  
  return (
    <div className="Bookmyshow">
   
    <BookingGrid bookingdata = {data}/>
    </div>
  );
}

export default BookMyShow;
