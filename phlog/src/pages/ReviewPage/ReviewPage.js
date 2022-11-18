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

function Home() {
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
            <Button sx={{margin: "2%", bgcolor:"#49AF25", width:"25%", fontSize: "16px"}} variant="contained">
                        SUBMIT
            </Button>
        
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" , width: "10%"}}>
            <Button sx={{ bgcolor: "#C05757" }} variant="contained" 
            onClick={event =>  window.location.href='/Restaurant'}>
                        CANCEL
            </Button>
        
          </Grid>
        </Grid>
        

      </Box>
    </div>
  );
}

export default Home;
