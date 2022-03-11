import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../App.css";



export default function DestinationCard({ name, image, description }) {
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
          <FavoriteBorderIcon className='favorite-icon'/>
        </CardContent>
      </Card>
    );
  }