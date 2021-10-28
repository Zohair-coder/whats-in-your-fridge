import React, { useState } from 'react'

function SearchBar(props) {

    const [searchValue, setSearchValue] = useState("")
    
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (

        <form onSubmit={(e) => props.submit(e, searchValue)}>
            <input type="text" value={searchValue} onChange={handleChange} placeholder="Search..."></input>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SearchBar
