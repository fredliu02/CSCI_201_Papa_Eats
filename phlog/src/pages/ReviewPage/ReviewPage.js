import * as React from "react";
import { useEffect, useState } from "react";
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
import { json, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function ReviewPage() {
    const { username, restaurant } = useParams();
    const date = new Date();
    const navigate = useNavigate();
    var state = {
        val: ""
      };
    const [revText, getRevText] = useState('');
    const [resdata, setResData] = useState('');
    const [usrdata, setUsrData] = useState('');


    const showTime = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "
        + date.getHours()
        + ':' + date.getMinutes()
        + ":" + date.getSeconds();
        var jsonData = {
          "username":username,
          "restaurantName": restaurant,
          "userID": -1,
          "restID":-1,
          "textRev":revText,
          "timePosted":showTime
      };
async function fetchRestaurant(){
  const response = await fetch('https://future-badge-366719.uw.r.appspot.com/api/restaurants/name/'+restaurant, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  });
  const data = await response.json();
  console.log(data.id);
  return data;
}
async function fetchUser(){
  const response = await 
  fetch('https://future-badge-366719.uw.r.appspot.com/api/users/username/'+username, {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    },
    });
  const usrJSON = await response.json();
  return usrJSON;
}



//     console.log("testing console2");
//     // console.log(username);
//     // console.log(restaurant);
//     fetch('https://future-badge-366719.uw.r.appspot.com/api/restaurants/name/'+restaurant, {
//       method: 'GET',
//       headers: {
//           'Accept': 'application/json',
//       },
//   })
// .then(response => response.json())
// .then((data) => {
//   jsonData.restID = data.id;
//   console.log(data.id)
//   console.log(JSON.stringify(jsonData));
// }
// )
// //.then(response => jsonData.restID = response.id)


// fetch('https://future-badge-366719.uw.r.appspot.com/api/users/username/'+username, {
// method: 'GET',
// headers: {
// 'Accept': 'application/json',
// },
// })
// .then(response => response.json())
// .then((data) => {
//   jsonData.userID = data.id;
//   console.log(data.id)
//   console.log(JSON.stringify(jsonData));
// }
// )
// .then(response => jsonData.userID = response.id)




  console.log("testing console3");
  console.log(JSON.stringify(jsonData));



    async function handleClick() {
        //console.log(this.state.val);
        console.log(JSON.stringify(jsonData));
        console.log("testing console1");
        var jsonData = {
          "username":username,
          "restaurantName": restaurant,
          "userID": -1,
          "restID":-1,
          "textRev":revText,
          "timePosted":showTime
      }
      const restJSON = fetchRestaurant();
      // fetchRestaurant().then(restJSON => {
      //   restJSON;
      // });
      console.log("REST ID");
      console.log(restJSON);
      console.log(restJSON.id);


      console.log("testing console2");
      // console.log(username);
      // console.log(restaurant);
      await fetch('https://future-badge-366719.uw.r.appspot.com/api/restaurants/name/'+restaurant, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
  .then(response => response.json())
  .then((data) => {
    jsonData.restID = data.id;
    console.log(data.id)
    console.log(JSON.stringify(jsonData));
  }
  )
  //.then(response => jsonData.restID = response.id)


  await fetch('https://future-badge-366719.uw.r.appspot.com/api/users/username/'+username, {
  method: 'GET',
  headers: {
  'Accept': 'application/json',
  },
  })
  .then(response => response.json())
  .then((data) => {
    jsonData.userID = data.id;
    console.log(data.id)
    console.log(JSON.stringify(jsonData));
  }
  )




  //----------------------------- POST FINAL JSON -----------------------------

      console.log(JSON.stringify(jsonData));
        await fetch("https://future-badge-366719.uw.r.appspot.com/api/reviews",
        {  // Enter your IP address here

            method: 'POST',
            mode: 'cors',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

          })
        // fetch("https://jsonplaceholder.typicode.com/posts")

        .then((response) => response.json())
        .then((json) => {
        console.log(JSON.stringify(jsonData));
        //                 setData(json);
        })

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
            {/* value={this.state.val}
            onChange={e => this.setState({ val: e.target.value })} */}
            <FilledInput
                // id="filled-adornment-amount"
                multiline rows={15}
                onChange={e => getRevText(e.target.value)}
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
