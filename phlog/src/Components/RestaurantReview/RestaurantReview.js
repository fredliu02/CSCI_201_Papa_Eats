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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoreVert } from "@mui/icons-material";

function RestaurantReview(props) {
  return (
    <Card
      sx={{
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "1%",
        borderRadius: "25px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "#8cdcff",
        }}
        action={
          <IconButton onClick={null}>
            <MoreVert />
          </IconButton>
        }
        avatar={<Avatar>{props.name.substring(0, 1)}</Avatar>}
        title={props.name}
        subheader={"Date Posted: " + props.date}
      />
      <CardContent sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <h3>Review:</h3>
        <h5>{props.review}</h5>
        <Typography></Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <br />
    </Card>
  );
}

export default RestaurantReview;
