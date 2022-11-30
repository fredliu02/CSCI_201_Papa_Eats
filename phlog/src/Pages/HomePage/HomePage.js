import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AuthNavbar from "../../Components/AuthNavbar/AuthNavbar";

function HomePage() {
  const { username } = useParams();
  const navigate = useNavigate();
  const navigateToAmerican = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/American");
  };

  const navigateToItalian = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Italian");
  };

  const navigateToMexican = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Mexican");
  };

  const navigateToChinese = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Chinese");
  };

  const navigateToJapanese = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Japanese");
  };

  const navigateToIndian = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Indian");
  };

  const navigateToCoffee = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Coffee");
  };

  const navigateToOther = () => {
    // 👇️ navigate to /contacts
    navigate("/" + username + "/Other");
  };

  return (
    <div>
      <AuthNavbar username={username}/>
      <Box sx={{ flexGrow: 1, margin: "5%" }}>
        <h2 style={{textAlign: "center"}}>  Pick a cuisine below! </h2>
        <Grid container>
          {/* display 1st row of images */}

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: 200, height: 200 }}
                class="center"
                src="https://media.istockphoto.com/id/980513032/vector/hamburger-cheese-with-beef-salad-tomato-and-ham-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=J2RCdXakXuh0OmGNTYSI9CEDbJHGavnmijDWusO65qs="
                alt="american"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://i.pinimg.com/originals/bd/83/75/bd8375b4bb1a6b22583acdd99be81ed0.png"
                alt="italian"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://thumbs.dreamstime.com/b/taco-vector-illustration-72950754.jpg"
                alt="mexican"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFlympHnRbQ7rEzjOVLNXohBjFf4PTlFDiw&usqp=CAU"
                alt="chinese"
              />
            </div>
          </Grid>

          {/* display 1st row of buttons */}

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToAmerican} variant="contained">
              American
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToItalian} variant="contained">
              Italian
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToMexican} variant="contained">
              Mexican
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToChinese} variant="contained">
              Chinese
            </Button>
          </Grid>
        </Grid>

        <br />

        <Grid container>
          {/* display 2nd row of images */}

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: 200, height: 200 }}
                class="center"
                src="https://img.freepik.com/premium-vector/sushi-vector-clipart-as-lunch_616819-386.jpg?w=2000"
                alt="japanese"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/252/420/small/hot-butter-chicken-cartoon-illustration-traditional-indian-food-meat-in-spiced-tomato-sauce-flat-color-object-restaurant-meal-served-makhani-chicken-isolated-on-white-background-vector.jpg"
                alt="indian"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://illustoon.com/photo/thum/3814.png"
                alt="coffee"
              />
            </div>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <div>
              <img
                style={{ width: 170, height: 170 }}
                class="center"
                src="https://i.pinimg.com/originals/65/57/3b/65573bbec6ec8cc68ba0a6541633fcd5.jpg"
                alt="other"
              />
            </div>
          </Grid>

          {/* display 2nd row of buttons */}

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToJapanese} variant="contained">
              Japanese
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToIndian} variant="contained">
              Indian
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToCoffee} variant="contained">
              Coffee
            </Button>
          </Grid>

          <Grid item xs={3} style={{ textAlign: "center" }}>
            <Button onClick={navigateToOther} variant="contained">
              Other
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
