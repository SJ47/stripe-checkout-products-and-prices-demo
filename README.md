# Stripe demo using prebuilt checkout and using React and Node Express

### This very basdic demo is to show how to retrieve products and prices stored in Stripe

## Basic instructions

Clone repo

From a terminal window

`cd client`

`npm install`

`cd server`

`npm install`

## Stripe Setup

Create a `.env` file in the server directory to store your Stripe secret key.\
This should be in the format: `REACT_APP_STRIPE_SECRET_KEY=insert_your_own_Stripe_secret_key_here`

Create some products and prices in your Stripe dashboard so you have some products to retrieve.

In the `client` directory, run `npm start` to run the client app in development mode.

In the `server` directory, run `npm run server:dev` to run the server in development mode.

Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

Open [http://localhost:4242/retrieve-products](http://localhost:4242/retrieve-products) to view products in JSON format in the browser.\
Open [http://localhost:4242/retrieve-prices](http://localhost:4242/retrieve-prices) to view prices in JSON format in the browser.\
