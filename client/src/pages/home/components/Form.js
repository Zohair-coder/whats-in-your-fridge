import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

import SearchBar from "./SearchBar"
import NextButton from "./NextButton"
import SelectedItems from "./SelectedItems"

function Form() {

    const [showSelectedItems, setShowSelectedItems] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    
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
        .then(response => response.data)
        .then(response => setSelectedItems(oldResponses => [...oldResponses, response.results[0]]))
        
        setShowSelectedItems(true)
    }
    
    let selectedItemsComponent = showSelectedItems ? <SelectedItems data={selectedItems}/> : null

    
    return (
        <div>
            <SearchBar submit={handleSubmit}/>
            {selectedItemsComponent}
            <Link to="/results">
                <NextButton />
            </Link>
        </div>
    )
}

export default Form
