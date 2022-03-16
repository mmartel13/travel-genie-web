import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Tours() {
  return (
    <div className="tours-cards">
      <Card sx={{ maxWidth: 345, position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image="./assets/AlaskaTour.jpeg"
          alt="A helicopter on top of a blue glacier with people cheering"
        />
        <CardContent sx={{ marginBottom: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Helicopter Flight and Glacier Landing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enjoy this beautiful one hour tour over the heavily glaciated
            Chugach Mountains. Based out of Girdwood, Alaska, you will see
            panorama views of ancient translucent blue glaciers and land within
            the valleys.
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image="./assets/YellowstoneTour.jpeg"
          alt="A hot spring with vivid blue, green, yellow, orange and red coloring"
        />
        <CardContent sx={{ marginBottom: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Grand Prismatic Springs
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Grand Prismatic Spring in Yellowstone National Park is a sight to be
            seen. Deeper than a 10-story building and larger than a soccer
            field, it's colours of blue, green, yellow, orange and red are
            mesmerizing.
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image="./assets/Whale.jpg"
          alt="a humpback whale jumping out of the ocean in Hawaii"
        />
        <CardContent sx={{ marginBottom: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Maui Whale Watching
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join us for a majestic experience you will never forget. Seeing the
            North Pacific humpback whale in it's natural environment for their
            annual migration is breathtaking.
          </Typography>
        </CardContent>
        <CardActions sx={{ position: "absolute", bottom: 0, right: 0 }}>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
