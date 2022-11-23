import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import OtherUser from '../../Pages/OtherUser/OtherUser';
import { rootShouldForwardProp } from '@mui/material/styles/styled';


const UserSearchbar = ({searchQuery, setSearchQuery}) => {
    const data = [
        "Paris",
        "London",
        "New York",
        "Tokyo",
        "Berlin",
        "Buenos Aires",
        "Cairo",
        "Canberra",
        "Rio de Janeiro",
        "Dublin"
    ];
    
    const filterData = () => {
        console.log("in data filtration")
        console.log(searchQuery)
        console.log(data)
        if (!searchQuery) {
          return false;
        } else {
          return data.includes(searchQuery);
        }
    };
    
    const route = () => {
        window.location.replace("/OtherUser/" + searchQuery);
        return
    }
    
    const keyDownHandler = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if(filterData()){
                console.log("pre-route")
                route()
            }
        }
    }

    return(
        <form>
            <Box sx={{ mx: 'auto', width: '75%', }}>
                <TextField
                    fullWidth id="outlined-search" 
                    className="text"
                    label="Search for Users" 
                    onInput={(e) => {
                        console.log("in input handler")
                        setSearchQuery(e.target.value)
                        console.log(searchQuery) 
                    }}
                    onKeyDown={keyDownHandler}
                    size="small"
                    sx={{
                        align: 'center',
                        width: '500',
                        position:'relative',
                    }}
                />
            </Box>
        </form>
    )
}

export default UserSearchbar