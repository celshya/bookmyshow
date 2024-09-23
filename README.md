# BookMyShow Seat Booking App

## Overview

This is a web application for booking seats in a cinema hall, inspired by **BookMyShow**. Users can select available seats, see which seats are already booked, and make payments. The app dynamically updates seat availability after booking confirmation, and implements responsive design for a seamless user experience across devices.

## Features

- **Seat Selection**: Users can view available (green) and booked (gray) seats and select multiple seats.
- **Dynamic Pricing**: The total price is calculated based on selected seats and their respective categories.
- **Responsive Design**: The UI adapts to different screen sizes using relative units.
- **Real-Time Seat Availability**: Once a user completes a booking, the selected seats are marked as booked and cannot be selected again.
- **Payment System**: Users can confirm their booking and proceed to payment.

## Tech Stack

- **Frontend**: React.js, CSS
- **State Management**: React Hooks (`useState`)
- **CSS Flexbox**: For layout and seat alignment
- **GitHub Pages**: Hosting the project repository

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/celshya/bookmyshow.git
Navigate to the project directory:


cd bookmyshow
Install the dependencies:

npm install
Start the development server:


npm start
The app should now be running on http://localhost:3000.

Project Structure
java

bookmyshow/
├── public/
├── src/
│   ├── components/
│   │   ├── BookingGroup.js
│   │   ├── BookingGrid.js
│   │   └── Seats.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
Usage
Select available seats from the grid.
Once seats are selected, the total price will be displayed in the button.
Click the "Pay" button to confirm the booking. The booked seats will turn gray, and they will be disabled for future selection.
Legend
Green: Available seats
Gray: Booked seats
Responsive Design
The UI is built with a responsive approach in mind. By using relative units like percentages (%) and em, the seat grid and buttons adapt well to different screen sizes.

Future Enhancements
Backend Integration: Integrate with a real-time database to persist seat booking information.
User Authentication: Allow users to log in, manage bookings, and view their history.
Payment Gateway: Implement a real-world payment integration.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.