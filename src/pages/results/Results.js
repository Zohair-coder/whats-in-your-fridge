import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from "react-router-dom"

function Results() {

    let location = useLocation()
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        let ingredientNames = ""
        location.state.items.forEach(ingredient => ingredientNames += ingredient.name + ",");
        ingredientNames = ingredientNames.slice(0, -1); // remove the last comma

        const params = new URLSearchParams({
            apiKey: "37299eda2bf644f7a90f8edb1736f7d6",
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
    <Link to={"/recipe/" + recipe.id}>
    <h3 key={recipe.id}>{recipe.title}</h3>
    </Link>
    )

    return (
        <div>
            <h1>Recipe's</h1>
            {recipeComponent}
        </div>
    )
}

export default Results
