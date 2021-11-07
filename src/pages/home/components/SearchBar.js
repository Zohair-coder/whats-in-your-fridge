import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
var axios = require("axios").default;


function SearchBar(props) {

    const [suggestions, setSuggestions] = useState([])
    const handleChange = (event) => {
        var options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete',
            params: { query: event.target.value, number: '3', metaInformation: 'false' },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '9488865383msh30a38be9ec16e99p109d9bjsn9090d29ce12f'
            }
        };
        
        axios.request(options).then(function (response) {
            setSuggestions(response.data.map(result => result.name))
        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleSubmit = (event, value) => {
        event.preventDefault()
        if (value) {
            props.submit(value)
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ width: 400 }}>
                <Autocomplete
                    onChange={handleSubmit}
                    filterOptions={(x) => x}
                    multiple
                    autoHighlight
                    options={suggestions}
                    noOptionsText="Start typing to search for ingredients"
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                className="searchBar"
                                onChange={handleChange}
                                label="Search ingredients"
                                sx={{
                                    marginLeft: 10
                                }}
                            />
                        )
                    }}
                >
                </Autocomplete>
            </Stack>
        </form>
    )
}

export default SearchBar
