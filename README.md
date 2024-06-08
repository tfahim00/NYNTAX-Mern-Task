# Car Rental Invoice Generator

## Introduction

This project is a car rental invoice generator built using the MERN stack. It fetches car details from an API and allows users to input customer details, rental duration, discounts, and additional charges to generate and print an invoice.

## Setup

### Backend

1. Clone the repository.
2. Navigate to the backend directory.
3. Run `npm install` to install dependencies.
4. Run `node server.js` to start the backend server.

### Frontend

1. Navigate to the frontend directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the React application.

## Features

- Fetch car details from an API.
- Input customer details and rental duration.
- Calculate rental charges.
- Generate and print invoice.

## Handling Hourly, Daily, and Weekly Rates

To avoid overcharging customers, the application compares the calculated hourly rate with the daily rate and applies the lower of the two.

## Technologies Used

- Express.js
- React.js
- Node.js

## Deployment

The application can be deployed using platforms like Heroku for the backend and Netlify for the frontend.

## License

This project is licensed under the MIT License.
