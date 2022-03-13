import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../App.css";
import { DestinationContext } from '../App';



export default function DestinationCard({ id, name, image, description, favorite }) {
  const { setDestinationResults } = useContext(DestinationContext);
  const handleFavoriteDestination = () => {
    console.log(favorite, 'clicked')
    fetch(`https://travel-genie-mm.uk.r.appspot.com/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({ favorite: !favorite })
    })
    .then(res => res.json())
    .then(() => {
      setDestinationResults()
    })
    .catch(err => console.error(err))
  }
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
          <FavoriteBorderIcon onClick={handleFavoriteDestination} className='favorite-icon'/>
        </CardContent>
      </Card>
    );
  }