import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import parse from "html-react-parser"

function Recipe() {
    const { id } = useParams();
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams({
            apiKey: "37299eda2bf644f7a90f8edb1736f7d6",
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
        body = <div>{parse(data.instructions)}</div>;
    }
    
    return (
        <div>
            <h1>{data.title}</h1>
            {body}
        </div>
    )
}

export default Recipe
