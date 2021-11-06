import { Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"

function Results() {

    let location = useLocation()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let ingredientNames = ""
        location.state.items.forEach(ingredient => ingredientNames += ingredient + ",");
        ingredientNames = ingredientNames.slice(0, -1); // remove the last comma

        const params = new URLSearchParams({
            apiKey: "4ce04e457c8348cfaec8ee0c7100b2f8",
            ingredients: ingredientNames
        })

        let base_url = "https://api.spoonacular.com/recipes/findByIngredients"
        let url = base_url + "?" + params.toString()

        let resp = axios({
            url: url,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })

        resp.then(r => {
            setRecipes(r.data);
        })

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const recipeComponent = recipes.map(recipe =>
    <Link to={"/recipe/" + recipe.id} key={recipe.id}>
    <Typography
        variant="h5"
        key={recipe.id}
        sx = {{
            mb: 2
        }}
        >
            {recipe.title}
        </Typography>
    </Link>
    )

    return (
        <Container maxWidth="sm">
            <Typography
                variant = "h2"
                sx = {{
                    mt: 13,
                    mb: 10
                }}
            >
                Recipe's
            </Typography>
            {recipeComponent}
        </ Container>
    )
}

export default Results
