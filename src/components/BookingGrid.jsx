import React, { useState } from 'react'
import BookingGroup from './BookingGroup'
import SeatLegend from './SeatLegend'


const BookingGrid = ({bookingdata}) => {
  const [selectedseats,setSelectedSeats] = useState([])
  const [updatedSelection,setUpdated] = useState(bookingdata)

  const handleSelection = (seatId)=>{
    setSelectedSeats((prevselection)=>{
      if(prevselection.includes(seatId)){
        return selectedseats.filter((id)=>id!==seatId)
      }
      else{
        return [...prevselection,seatId]
      }
    })


  }
  const handlePayment = ()=>{

    const newdata = updatedSelection.map((group)=>({...group,bookingGroup:group.bookingGroup.map((row)=>({...row,seats:row.seats.map(seat=>{
      if (selectedseats.includes(seat.id)) {
        return { ...seat, availability: 'booked' };
      }
      return seat;
    })}))}))

    setUpdated(newdata);
    setSelectedSeats([]); 
    alert("Booking Confirmed");
   
  }
  const calculateTotalPrice = ()=>{
    let totalprice = 0
    selectedseats.forEach((seatid)=>{
      bookingdata.forEach((group)=>{
        const seat = group.bookingGroup.flatMap((row) => row.seats)
        .find((s) => s.id === seatid);
        if(seat){
          totalprice += parseInt(group.price); 
        }

      })

    })
    return totalprice;
  }
  const totalprice = calculateTotalPrice();


  return (
    <section className='grid-category'>
        <SeatLegend/>
      {updatedSelection.map((group)=>{
        return <div className='booking-grid' key={group.id}><label className='booking-grid_label'>Rs. {group.price} {group.category}
      
        </label>
        <div className='line'></div>
        <BookingGroup groupData={group.bookingGroup} selectedseats={selectedseats} handleSelection={handleSelection}/>
        </div>
      })}
      <div className='screen-container'>
      <p>All eyes this way pls!</p>
      <div className='screen'>
      </div>
      {selectedseats?.length>0?<button onClick={handlePayment}>pay Rs.{totalprice}</button>:<></>}
      </div>
      

    </section>
    
  )
}

export default BookingGrid