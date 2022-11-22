import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

function ReviewPage() {
    const date = new Date();
    const navigate = useNavigate();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    var jsonData = {
        "reviewID":100,
        "userID": 0,
        "restID":5,
        "textRev":"Add review here",
        "timePosted":showTime
    }

    function handleClick() {
    
    // Send data to the backend via POST
    fetch('localhost:8081/api/restaurants/3/reviews', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    });
    navigate(-1); //navigate back to restaurant page
  }
    
  return (
    <div>
      <Box sx={{ flexGrow: 1, margin: "10%" }}>
        <Grid container>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <h1>Write a review for this restaurant:</h1>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <FormControl sx={{  width: 0.8  }} variant="filled" className="w-50">
            <InputLabel>Write review here...</InputLabel>
            <FilledInput
                // id="filled-adornment-amount"
                multiline rows={15}
            />
            
            </FormControl>
          </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button sx={{margin: "2%", bgcolor:"#49AF25", width:"25%", fontSize: "16px"}} variant="contained"
            onClick={handleClick}>
                        SUBMIT
            </Button>
        
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" , width: "10%"}}>
            <Button sx={{ bgcolor: "#C05757" }} variant="contained" 
            onClick={() => navigate(-1)}>
                        CANCEL
            </Button>
        
          </Grid>
        </Grid>
        

      </Box>
    </div>
  );
}

export default ReviewPage;
