# ilustrografia.com

[**Live Demo - ilustrografia.com**](https://ilustrografia.com/) 👈

#### eCommerce platform built with the MERN stack & Redux & Typescript

<img src="./frontend/public/images/github-screens/ilustrografia-fullstack-app-1.jpg" alt="screens of the ilustrografia eCommerce platform">

## Description

This is a beautifully styled and responsive e-commerce platform designed for an artist who sells prints of her digital paintings. The website offers a variety of print sizes, materials, and prices. To manage this diversity, the database was carefully structured to accommodate different product variants, including size, material, stock count, prices, names, descriptions, images of the digital paintings, and visualization images for each material.

To ensure a clean and user-friendly interface, Product Variants were created, allowing users to easily select the size or material they prefer while dynamically updating the price and images.

For each product, there is an illustration page featuring the main image, various product variants, and a description of the illustrated creature. The shop page enables users to filter products by category, while the illustrations page provides filtering options for illustrations by category.

## Key Features

- Full-featured shopping cart
- Product reviews and ratings
- Product and illustration filtering
- User profiles with order history
- Admin panel for product and user management
- Admin Order details page
- Order tracking and status updates
- Checkout process with shipping and payment method selection
- PayPal and credit card integration
- Database seeding for products and users
- Fetching the latest YouTube animations using the YouTube API
- Dark/Light theme

## Technologies Used

- TypeScript
- React
- MongoDB with Mongoose
- Node.js with Express
- Redux for state management
- Redux Toolkit, RTK Query
- Lodash
- Helmet
- Radix UI
- Tailwind CSS for styling
- Postman for API testing
- Supertest for Backend tests
- React Testing Library for Frontend Integration tests
- Cypress for E2E tests
- Continuously deployed on Render.com

[**Live Demo - ilustrografia.com**](https://ilustrografia.com/) 👈

<img src="./frontend/public/images/github-screens/ilustrografia-fullstack-app-2.jpg" alt="screens of the ilustrografia eCommerce platform">

Building this advanced project with responsiveness, light/dark theme support, and user experience in mind was a journey. Modern technologies were employed to bring this project to life, and every effort was made to ensure its success. We hope you enjoy it!

## The Artist

- [Meggiem.Art](https://www.instagram.com/meggie_art/) the Artist 👈

## Usage

1. Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Environment Variables

Rename the `.env.example` file to `.env` and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = YOUR_MONGO_URI
MONGO_TEST_URI = YOUR_MONGO_TEST_URI
JWT_SECRET = ADD_YOUR_SECRET
PAYPAL_CLIENT_ID = ADD_YOUR_PAYPAL_CLIENT

<!-- can be omitted -->

YOUTUBE_API=YOUR_YT_API_OR_YOU_CAN_OMIT_THIS
CHANNEL_API=YOUR_YT_CHANNEL_API_OR_YOU_CAN_OMIT_THIS
PLAYLIST_NEO_SLAVIC_CENSUS=YOUR_PLAYLIST_OR_YOU_CAN_OMIT_THIS
```

### Install Dependencies (frontend & backend)

```
cd frontend
npm install
cd ../backend
npm install
```

### Seed Database

In the backend you can use the following commands to seed the database with some sample users and products as well as destroy all data

```
cd backend

# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

john@email.com (Customer)
123456

jane@email.com (Customer)
123456
```

### Run

```

# Run backend (:5000)
npm run dev

# Run frontend (:3000)
cd ../frontend
npm start

```

### Run Tests

To run the tests correctly:

- set in your env file NODE_ENV = test
- set in your env file MONGO_TEST_URI = you MongoDb Test URI

```

# Run backend tests (:5000)
cd ../backend
npm run data:import
npm run dev
npm run test

# Run frontend integration tests (:3000)
cd ../frontend
npm run test

# Run frontend e2e tests, run backend and react server before:
cd ../backend
npm run dev
cd ../frontend
npm start

npm run cypress:open

```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

---
