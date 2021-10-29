import React from 'react'

function Result(props) {

    console.log(props.data)
    let items;
    if (JSON.stringify(props.data) !== '{}') {
        items = <ul>
            {props.data.results.map(ingredient => <li>{ingredient.name} {ingredient.id}</li>)}
        </ul>
    } else {
        items =  <h4>Searching...</h4>
    }
    return (
        <div>
            <h1>Selected Items</h1>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Result
