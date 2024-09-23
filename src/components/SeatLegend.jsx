import React from 'react'

const SeatLegend = () => {
  return (
    <div className='seatLegend'>
    <div className='seat'></div><label>Available</label>
    <div className='seat seat-booked'></div><label>Booked</label>
    <div className='seat selected'> </div><label>selected</label> </div>
  )
}

export default SeatLegend