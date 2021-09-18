const baseURL = "http://localhost:4242/";

const StripeService = {
    async getProducts() {
        return fetch(baseURL + "retrieve-products")
            .then(res => res.json())
    },
    async getPrices() {
        return fetch(baseURL + "retrieve-prices")
            .then(res => res.json())
    },
    async getProductsList(products, prices) {
        return products.map((product) => {
            const foundPrice = prices.find(obj => obj.product === product.id)

            return (
                <li key={product.id}>
                    <img src={product.images[0]} alt="" height="100" width="100" />
                    <br></br>
                    {product.name}
                    <br></br>
                    {product.description}
                    <br></br>
                    {foundPrice.unit_amount}
                </li>
            )
        })
    }
}

export default StripeService
