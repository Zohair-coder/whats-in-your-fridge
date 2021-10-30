import React from 'react'
import { useLocation } from "react-router-dom"

function Results() {
    let location = useLocation()
    console.log(location.state.items)
    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}

export default Results
