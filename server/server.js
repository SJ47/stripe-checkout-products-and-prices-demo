// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

require("dotenv").config();

const STRIPE_SECRET_KEY = process.env.REACT_APP_STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);


app.get("/", function (req, res) {
    res.json({ message: "Product Info: " });
    console.log(product.id)
})

app.get("/retrieve-products", async function (req, res) {
    const product = await stripe.products.list(
        { limit: 4, }
    );
    res.json(product);
})

app.get("/retrieve-prices", async function (req, res) {
    const product = await stripe.prices.list(
        { limit: 4, }
    );
    res.json(product);
})

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));