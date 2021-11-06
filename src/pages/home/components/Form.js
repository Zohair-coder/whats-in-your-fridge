import React, { useState } from 'react'

import SearchBar from "./SearchBar"
import NextButton from "./NextButton"

function Form() {

    const [selectedItems, setSelectedItems] = useState([])
    const [enableNext, setEnableNext] = useState(false)

    const handleSubmit = (items) => {
        setSelectedItems(items)
        setEnableNext(true)
    }

    return (
        <div>
            <SearchBar
                submit={handleSubmit}
            />
            <NextButton items={selectedItems} isEnabled={enableNext}/>
        </div>
    )
}

export default Form
