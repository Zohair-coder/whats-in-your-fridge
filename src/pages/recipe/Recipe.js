import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Container, Typography, Skeleton } from '@mui/material';
import parse from 'html-react-parser';
import config from "../../config"
var axios = require("axios").default;

function Recipe() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        var options = {
            method: 'GET',
            url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
            params: { includeNutrition: 'true' },
            headers: {
                'x-rapidapi-host': config["x-rapidapi-host"],
                'x-rapidapi-key': config["x-rapidapi-key"]
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    let body = <div>
        <Skeleton sx={{ padding: 2 }} variant="text" width="100%" />
        <Skeleton sx={{ marginBottom: 10, padding: 2 }} variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="100%" />

    </div>;
    if (data.length !== 0) {
        let pattern = /<.+>/;
        if (pattern.test(data.instructions)) {
            body = parse(data.instructions)
        } else if (data.instructions === "" || data.instructions === null) {
            body = <Typography variant="p">No instructions :(</Typography>
        }
        else {
            console.log(data);
            body = <div>
                <Typography variant="h5">Ingredients:</Typography>
                <ul>
                    {data.extendedIngredients.map((ingredient, index) => {
                        return <li variant="p">{ingredient.original}</li>
                    })}
                </ul>
                <Typography variant="p">{data.instructions}</Typography>
            </div>;
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography
                variant="h3"
                sx={{
                    mt: 9,
                    mb: 6
                }}
            >
                {data.title}
            </Typography>
            {body}
        </Container>
    )
}

export default Recipe
