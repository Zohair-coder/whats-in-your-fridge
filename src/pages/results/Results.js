import { Container, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"
import config from "../../config"
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
                number: '100',
                ignorePantry: 'true',
                ranking: '2'
            },
            headers: {
                'x-rapidapi-host': config["x-rapidapi-host"],
                'x-rapidapi-key': config["x-rapidapi-key"]
            }
        };

        axios.request(options).then(function (response) {
            setRecipes(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const recipeComponent = recipes.map(recipe =>
        <div
            style={{
                marginBottom: "60px",
                padding: "20px",
                width: "370px"
                }}
        >
            <Link
                to={"/recipe/" + recipe.id}
                style = {{
                    color: "black",
                    textDecoration: "none",
                }}
                key={recipe.id}>
                <img
                    src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`}
                    alt="recipe"
                    style={{
                        borderRadius: '15px',
                        width: "312px",
                        height: "231px"
                    }}
                />
                <Typography
                    variant="h3"
                    key={recipe.id}
                    sx={{
                        mb: 2,
                        fontSize: '1rem',
                        fontWeight: "bold",
                        fontFamily: "Exo, sans-serif",
                    }}
                >
                    {recipe.title}
                </Typography>
                <Typography
                    variant="p"
                    key={recipe.id}
                    sx = {{
                        color: "#878282",
                        fontFamily: "Exo, sans-serif",
                    }} 
                >
                    {recipe.missedIngredientCount > 0 ?
                        `Missing Ingredients: ${recipe.missedIngredients.map(ingredient => ingredient.name).join(", ")}` :
                        "No missing ingredients"
                        }
                </Typography>

            </Link>
        </div>
    )

    return (
        <Container>
            <Typography
                variant="h2"
                sx={{
                    mt: 13,
                    mb: 10,
                    textAlign: "center"
                }}
            >
                Recipes
            </Typography>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
            }}>
                {recipeComponent}
            </div>
        </ Container>
    )
}

export default Results
