import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Grid } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";



function SignUp() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };

    return (
        <div>
            <Box sx={{ flexGrow: 1, margin: "10%" }}>
                <Grid container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <h1>Sign Up Here</h1>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <h4>
                            Fill out the details below to create a new account!
                        </h4>
                    </Grid>

                    <Grid item xs={12}>
                        <div>
                            <Card
                                variant="outlined"
                                sx={{
                                    marginTop: "5%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    marginBottom: "1%",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "grid",
                                        gridAutoFlow: "row",
                                        gridColumnGap: 10,
                                    }}
                                >
                                    <h3>Sign Up Form!</h3>
                                    <TextField
                                        sx={{ marginBottom: "5%" }}
                                        id="outlined-basic"
                                        label="Username"
                                        variant="outlined"
                                    />
                                    <TextField
                                        sx={{ marginBottom: "5%" }}
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                    />

                                    <TextField
                                        sx={{ marginBottom: "5%" }}
                                        id="outlined-basic"
                                        label="Confirm Password"
                                        variant="outlined"
                                    />

                                    <div
                                        sx={{
                                            marginBottom: "5%",
                                        }}
                                    >
                                        <Button variant="contained">Sign Up!</Button>
                                    </div>


                                </CardContent>
                            </Card>

                            <Button onClick = {navigateToHome} sx={{ marginLeft: "20%" }} variant="text">
                            Return to Log In
                            </Button>
                            
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SignUp;
