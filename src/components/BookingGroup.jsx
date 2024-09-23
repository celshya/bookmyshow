
import Seats from './Seats'

const BookingGroup = ({groupData,selectedseats,handleSelection}) => {


  
  return (
    <div className='booking_group'>{groupData.map((row)=>{
      return <div className="booking_row" key={row.rowName}><label className='row_label'>{row.rowName}</label>
      <Seats seatsList={row.seats} selectedseats={selectedseats}   handleSelection={handleSelection} />
      </div>
    })}</div>
  )
}

export default BookingGroup