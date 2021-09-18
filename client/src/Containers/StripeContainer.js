import React, { useEffect, useState } from 'react'
import Checkout from '../Components/Checkout'
import StripeService from '../services/StripeService'

function StripeContainer() {
    const [products, setProducts] = useState([])
    const [prices, setPrices] = useState([])
    const [productsAndPrices, setProductsAndPrices] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        StripeService.getProducts()
            .then((products) => setProducts(products.data))

        StripeService.getPrices()
            .then((prices) => setPrices(prices.data))
            .then(setIsLoading(false))

        if (!isLoading) {
            StripeService.getProductsList(products, prices)
                .then((productsList) => setProductsAndPrices(productsList))
        }
    }, [prices])

    return (
        <div className="stripe-container">
            <h1>My Product Page</h1>
            <Checkout />
            <p>Product List</p>
            {productsAndPrices}
        </div>
    )
}

export default StripeContainer
