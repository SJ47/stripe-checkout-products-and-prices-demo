import React from 'react'
import { useHistory } from "react-router-dom";

const Cancel = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div>
            <h1>SORRY - ORDER CANCELLED!</h1>
            <p>
                There appears to be a problem with your order!
                Please try again!
                If you have any questions, please email
                <a href="mailto:orders@example.com"> orders@example.com</a>.
            </p>
            <button onClick={handleClick}>Return to home page</button>
        </div>
    )
}

export default Cancel
