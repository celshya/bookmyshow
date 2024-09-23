import React from 'react'

const Seats = ({seatsList,selectedseats,handleSelection}) => {
console.log(seatsList)
  return (
    <div className='seats'>{
seatsList?.map((seat)=>{

  const isBooked = seat.availability === 'booked'; 
  return seat.seatnumber?<div  className={`seat ${selectedseats.includes(seat.id)?"selected":""} ${isBooked ? 'seat-booked' : ''}`} key={seat.id} onClick={()=>!isBooked && handleSelection(seat.id)
  } style={{ backgroundColor: seat.availability === 'booked' ? 'gray' : '', color:seat.availability === 'booked' ? 'white' : '' }}>{seat.seatnumber}</div>:<></>
})

    }</div>
  )
}

export default Seats