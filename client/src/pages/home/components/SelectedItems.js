import React from 'react'

function Result(props) {
    return (
        <div>
            <h1>Selected Items</h1>
            <ul>
                <li>{props.data.results[0].id}</li>
            </ul>
        </div>
    )
}

export default Result
