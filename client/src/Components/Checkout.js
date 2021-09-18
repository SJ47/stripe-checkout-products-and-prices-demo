import React from 'react'

function Checkout() {
    return (
        <>
            <form action="http://localhost:4242/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
            </form>
        </>
    )
}

export default Checkout
