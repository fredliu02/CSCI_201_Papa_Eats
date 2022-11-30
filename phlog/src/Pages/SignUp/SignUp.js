import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function SignUp() {

  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };
  const [Username, setUserName] = useState('');
  const [Password, setPassword] = useState('');

 function handleClick() {
    console.log(Username);
    console.log(Password);
    console.log("end console test1");
    var jsonData = {
        "username":Username,
        "password":Password
        }
    let formData = new FormData();
    formData.append('username', Username);
    formData.append('password', Password);
    const strForm = "username="+Username+"&password="+Password
    //console.log(this.state.val);
     fetch("https://future-badge-366719.uw.r.appspot.com/process_register",
    {  // Enter your IP address here

        method: 'POST', 
        //mode: 'cors', 
        headers: new Headers({"Content-Type": "application/x-www-form-urlencoded"}),
        body: strForm // body data type must match "Content-Type" header
      });
      alert("New user successfully registered!");
      navigate(-1);

    // fetch("https://jsonplaceholder.typicode.com/posts")
    
    // .then((response) => response)
    // .then((json) => {
    // console.log(formData);
    // //                 setData(json);
    // })

//navigate(-1); 
//navigateToHome();
}

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
                                        onChange={e => setUserName(e.target.value)}
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
                                        onChange={e => setPassword(e.target.value)}
                                    />

                                    <div
                                        sx={{
                                            marginBottom: "5%",
                                        }}
                                    >
                                        <Button onClick = {handleClick} variant="contained">Sign Up!</Button>
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
