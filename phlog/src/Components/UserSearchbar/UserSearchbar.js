import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const UserSearchbar = ({searchQuery, setSearchQuery, username}) => {
    const navigate = useNavigate();

    const validate = async (searchQuery) => {
        const response = await fetch(
            "https://future-badge-366719.uw.r.appspot.com/api/users/username/" +
              searchQuery,
            {
              Method: "GET",
              Headers: {
                Accept: "application.json",
                "Content-Type": "application/json",
              },
            }
        );
        let data = null;
        try {
            data = await response.json();
        } catch (err) {
            console.log("couldn't find user")
            return false;
        }

        console.log("successful search validation")
        return true;
    }
    
    const filterData = async () => {
        console.log("in data filtration")
        console.log(searchQuery)
        if (!searchQuery) 
          return false;
        else if (searchQuery === username)
            return false;
        else{
            let val = await validate(searchQuery);
            if(val){
                console.log("pre-route")
                route();
            }
            else{
                console.log("not routing")
                return;
            }
        }
    };
    
    const route = () => {
        navigate("/" + username + "/" + searchQuery + "/OtherUser")
        return;
    }
    
    const keyDownHandler = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            filterData();
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