import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Container, Typography } from '@mui/material';
import parse from 'html-react-parser';

function Recipe() {
    const { id } = useParams();
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams({
            apiKey: "4ce04e457c8348cfaec8ee0c7100b2f8",
            includeNutrition: true
        })

        let base_url = `https://api.spoonacular.com/recipes/${id}/information`
        let url = base_url + "?" + params.toString()

        let resp = axios({
            url: url,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        resp.then(r => setData(r.data));
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    let body = <p>Loading...</p>;
    if (data.length !== 0) {
        let pattern = /<.+>/;
        if (pattern.test(data.instructions)) {
            body = parse(data.instructions)
        } else {
            body = <p>{data.instructions}</p>;
        }
    }
    
    return (
        <Container maxWidth="sm">
            <Typography
                variant="h3"
                sx = {{
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
