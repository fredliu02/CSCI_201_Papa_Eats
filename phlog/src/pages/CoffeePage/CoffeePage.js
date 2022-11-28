import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";

function CoffeePage() {
    const { username } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const apiGet = () => {
        fetch("https://future-badge-366719.uw.r.appspot.com/api/restaurants/cuisine/Coffee")
            // fetch("https://jsonplaceholder.typicode.com/posts")

            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            })
    }

    return (
        <div>
        <AuthNavbar username={username}/>
        <Box sx={{ flexGrow: 1, marginTop: "2%"}}>
            <Grid container>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <h1> Welcome to the Coffee  Page! </h1>
                    <h4> Click to display coffee shops below:</h4>
                    <Button onClick={apiGet} variant="contained">
                        Load Coffee Shops
                    </Button>
                </Grid>
                <Grid item xs={12}>        
                        <ul>
                            {data.map((item) => (  
                                <Paper 
                                    elevation={1} 
                                    sx={{
                                        marginLeft: "25%",
                                        marginRight: "25%",
                                        marginTop: "1%",
                                        borderRadius: "25px",
                                        height: "60px",
                                        backgroundColor: "#8cdcff",
                                    }}
                                >          
                                    <br/>                            
                                    <div style={{display: "inline-block", marginLeft: "20px"}}>
                                        {item.name}
                                        <Button startIcon={<ArrowForwardIcon/>} 
                                            onClick={() => {navigate("/" + username + "/R/" + item.name)}}
                                        >
                                        </Button>
                                    </div>
                                    <br/>
                                </Paper>
        
                                // <li key={item.id}>{item.name}</li>
                            ))}
                             <br/>
                         </ul>
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




export default CoffeePage;
