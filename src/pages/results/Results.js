import { Container, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"
var axios = require("axios").default;

function Results() {

    let location = useLocation()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let ingredientNames = ""
        location.state.items.forEach(ingredient => ingredientNames += ingredient + ",");
        ingredientNames = ingredientNames.slice(0, -1); // remove the last comma
        var options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
            params: {
                ingredients: ingredientNames,
                number: '10',
                ignorePantry: 'true',
                ranking: '2'
            },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '9488865383msh30a38be9ec16e99p109d9bjsn9090d29ce12f'
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const recipeComponent = recipes.map(recipe =>
        <Link to={"/recipe/" + recipe.id} key={recipe.id}>
            <Typography
                variant="h5"
                key={recipe.id}
                sx={{
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
                variant="h2"
                sx={{
                    mt: 13,
                    mb: 10
                }}
            >
                Recipes
            </Typography>
            {recipeComponent}
        </ Container>
    )
}

export default Results
