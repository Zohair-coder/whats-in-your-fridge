import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


function SearchBar(props) {
    
    const [searchValue, setSearchValue] = useState("")
    
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.submit(event, searchValue)
        setSearchValue("")
    }
    
    return (

        <form onSubmit={handleSubmit}>
            <TextField
                className = "searchBar"
                value = {searchValue}
                onChange = {handleChange}
                label = "Search Recipe's"
                sx = {{
                    marginLeft: 10
                }} 
            />
        </form>
    )
}

export default SearchBar
