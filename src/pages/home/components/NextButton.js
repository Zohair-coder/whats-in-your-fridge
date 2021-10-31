import React from 'react'
import { useHistory } from "react-router-dom"

function NextButton(props) {

    const history = useHistory()
    const handleClick = () => {
        history.push("/results", { items: props.items });
    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default NextButton
