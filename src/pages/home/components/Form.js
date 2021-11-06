import React, { useState } from 'react'

import SearchBar from "./SearchBar"
import NextButton from "./NextButton"

function Form() {

    const [selectedItems, setSelectedItems] = useState([])

    const handleSubmit = (items) => setSelectedItems(items)
    return (
        <div>
            <SearchBar
                submit={handleSubmit}
            />
            <NextButton items={selectedItems}/>
        </div>
    )
}

export default Form
