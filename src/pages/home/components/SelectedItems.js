import React from 'react'

function Result(props) {

    let items;
    if (JSON.stringify(props.data) !== '[]') {
        items = <ul>
            {props.data.map(ingredient =>
                <li key={ingredient.id}>
                    {ingredient.name} {ingredient.id}
                </li>
            )
            }
        </ul>
    } else {
        items = <h4>Searching...</h4>
    }
    return (
        <div>
            <h1>Selected Items</h1>
            {items}
        </div>
    )
}

export default Result
