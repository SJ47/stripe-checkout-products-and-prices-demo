import React from 'react'
import { useHistory } from "react-router-dom";

const Success = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div>
            <h1>Thanks for your order!</h1>
            <p>
                We appreciate your business!
                If you have any questions, please email
                <a href="mailto:orders@example.com"> orders@example.com</a>.
            </p>

            <button onClick={handleClick}>Return to home page</button>
        </div>
    )
}

export default Success
