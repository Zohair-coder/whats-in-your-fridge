import React, { useState } from 'react'
import axios from "axios"

import SearchBar from "./SearchBar"
import NextButton from "./NextButton"
import SelectedItems from "./SelectedItems"

function Form() {

    const [showSelectedItems, setShowSelectedItems] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    const [error, setError] = useState("")
    
    const handleSubmit = (event, search) => {
        event.preventDefault()
        let base_url = "https://api.spoonacular.com/food/ingredients/search"
        const params = new URLSearchParams({
            apiKey: "37299eda2bf644f7a90f8edb1736f7d6",
            query: search,
            number: 1
        })
        let url = base_url + "?" + params.toString()
        axios({
            url: url,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(err => {
            if (err.toJSON().status === 402) {
                setError("Max API requests reached.")
            }
            throw err;
        }
        )
        .then(response => response.data)
        .then(response => setSelectedItems(oldResponses => [...oldResponses, response.results[0]]))
        .then(setShowSelectedItems(true))
        
    }
    
    let selectedItemsComponent = showSelectedItems ? <SelectedItems data={selectedItems}/> : null
    
    return (
        <div>
            <SearchBar submit={handleSubmit}/>
            {error !== "" ?
            <h3>{error}</h3> :
            selectedItemsComponent}
            <NextButton items={selectedItems}/>
        </div>
    )
}

export default Form
