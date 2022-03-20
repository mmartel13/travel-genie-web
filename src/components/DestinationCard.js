import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../App.css";
import { DestinationContext } from "../App";
import "./DestinationCard.css"


export default function DestinationCard({
  id,
  name,
  image,
  description,
  favorite,
}) {
  const { setDestinationResults, filteredDestinations } =
    useContext(DestinationContext);
  const handleFavoriteDestination = () => {
    fetch(`https://travel-genie-mm.uk.r.appspot.com/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then(() => {
        fetch(
          "https://travel-genie-mm.uk.r.appspot.com/destinations/filtered",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(filteredDestinations),
          }
        )
          .then((res) => res.json())
          .then((data) => setDestinationResults(data))
      })
      .catch((err) => console.error(err));
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="destination-card">
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="image of destination"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        {favorite
          ? <FavoriteIcon 
          onClick={handleFavoriteDestination}
          className="filled-favorite-icon"
          sx={{fill: "red"}}
        />
          : <FavoriteBorderIcon
            onClick={handleFavoriteDestination}
            className="favorite-icon"
          />
        }
      </CardContent>
    </Card>
  );
}
