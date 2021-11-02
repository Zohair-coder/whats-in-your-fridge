import React from 'react'
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';

function NextButton(props) {

    const history = useHistory()
    const handleClick = () => {
        history.push("/results", { items: props.items });
    }
    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    ml: 52,
                    mt: 5
                }}    
            >
                Next
            </Button>
            {/* <button onClick={handleClick}>Next</button> */}
        </div>
    )
}

export default NextButton
