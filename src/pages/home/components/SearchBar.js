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
            <TextField className="searchBar" label="Search Recipe's" />
            <br />
            <input type="text" value={searchValue} onChange={handleChange} placeholder="Search..."></input>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar
