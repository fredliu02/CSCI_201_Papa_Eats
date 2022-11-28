import * as React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Person } from "@mui/icons-material";

function ReviewCard(props) {
  return (
    <Card
      sx={{
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "3%",
        borderRadius: "25px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "#8cdcff",
        }}
        avatar={
          <Avatar sx={{ backgroundColor: "#6665DD" }}>
            {props.name.substring(0, 1)}
          </Avatar>
        }
        title={props.name}
        subheader={"Date Posted: " + props.date}
      />
      <CardContent sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <h2>{props.restaurant}</h2>
        <h3>Review:</h3>
        <Typography>{props.review}</Typography>
      </CardContent>
      <br />
    </Card>
  );
}

export default ReviewCard;
