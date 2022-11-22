import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";



function IndianPage() {

    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("https://future-badge-366719.uw.r.appspot.com/api/restaurants/cuisine/Indian")
            // fetch("https://jsonplaceholder.typicode.com/posts")

            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1, margin: "10%" }}>
                <Grid container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <h1> Indian Cuisine </h1>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <h4>
                            Click to display Indian Food Below
                            <br />

                            <button onClick={apiGet}> Load Indian Cuisines</button>

                            <br />

                            <div>
                                <ul>
                                    {data.map((item) => (

                                        <li key={item.id}>{item.name}</li>

                                    ))}
                                </ul>

                            </div>

                        </h4>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );

    // {/* return (


    //         <div>
    //             <h1> American Cuisine</h1>
    //             <br />

    //             {/* <button onClick={apiGet}> Load American Cuisines</button> */}

    // <br />

    //         </div >




    // ); * /}
}




export default IndianPage;
