import React, { useState } from 'react'


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
            <input type="text" value={searchValue} onChange={handleChange} placeholder="Search..."></input>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar
