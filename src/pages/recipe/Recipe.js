import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Container, Typography } from '@mui/material';
import parse from 'html-react-parser';
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
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': '9488865383msh30a38be9ec16e99p109d9bjsn9090d29ce12f'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    let body = <Typography variant="p">Loading...</Typography>;
    if (data.length !== 0) {
        let pattern = /<.+>/;
        if (pattern.test(data.instructions)) {
            body = parse(data.instructions)
        } else if (data.instructions === "" || data.instructions === null) {
            body = <Typography variant="p">No instructions :(</Typography>
        }
        else {
            body = <Typography variant="p">{data.instructions}</Typography>;
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
