import React from 'react'
import Heading from "./components/Heading"
import Form from "./components/Form"
import Container from "@mui/material/Container";
import { Box } from '@mui/system';

function Home() {
    return (
        <div className="GreenMintBackground.png" />
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

export default Home
