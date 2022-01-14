import React from 'react'
import Heading from "./components/Heading"
import Form from "./components/Form"
import Container from "@mui/material/Container";
import { Box } from '@mui/system';

function Home() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 20 }}>
                <Heading
                    variant="h2"
                    sx={{
                        my: 10,
                        textAlign: "center"
                    }}
                />
                <Form />
            </Box>
        </Container>
    )
}

function App() {
    return (
        <div
            style={{
                backgroundColor: #ccffd2
                width: '100px',
                height: '100px'
            }}
    )
}

export default Home
