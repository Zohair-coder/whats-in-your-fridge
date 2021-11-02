import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'

function SelectedItems(props) {

    let items;
    if (JSON.stringify(props.data) !== '[]') {
        items = <List>
            {props.data.map(ingredient =>
                <ListItem key={ingredient.id}>
                    <ListItemText
                        primary={ingredient.name}
                    />
                </ListItem>
            )
            }
        </List>
        // items = <ul>
        //     {props.data.map(ingredient =>
        //         <li key={ingredient.id}>
        //             {ingredient.name} {ingredient.id}
        //         </li>
        //     )
        //     }
        // </ul>
    } else {
        // items = <Typography variant ="p">Searching...</Typography>
        items = <List>
            <ListItem>
                <ListItemText
                    primary="Searching..."
                />
            </ListItem>
        </List>
    }
    return (
        <div>
            <Typography variant="h4" sx={{ mt: 4 }}>Selected Items</Typography>
            {items}
        </div>
    )
}

export default SelectedItems
