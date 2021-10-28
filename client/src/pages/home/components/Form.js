import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

import SearchBar from "./SearchBar"
import NextButton from "./NextButton"
import SelectedItems from "./SelectedItems"

function Form() {

    const [showSelectedItems, setShowSelectedItems] = useState(false)
    const [data, setData] = useState({})
    
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
        .then(response => setData(response))
        
        // setData(fetchData())
        setShowSelectedItems(true)
    }
    
    let selectedItems = showSelectedItems ? <SelectedItems data={data}/> : null

    
    return (
        <div>
            <SearchBar submit={handleSubmit}/>
            {selectedItems}
            <Link to="/results">
                <NextButton />
            </Link>
        </div>
    )
}

export default Form
