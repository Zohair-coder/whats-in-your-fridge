import React from 'react'

function Result(props) {

    console.log(props.data)
    let items;
    if (JSON.stringify(props.data) !== '{}') {
        items = <ul>
            {props.data.map(ingredient => <li key={ingredient.results[0].id}>{ingredient.results[0].name} {ingredient.results[0].id}</li>)}
        </ul>
    } else {
        items =  <h4>Searching...</h4>
    }
    return (
        <div>
            <h1>Selected Items</h1>
            <ul>
                {items}
                {/* Test */}
            </ul>
        </div>
    )
}

export default Result
