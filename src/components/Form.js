import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { DestinationContext } from "../App";

export default function Form() {
  const { setDestinationResults, filteredDestinations, setFilteredDestinations } = useContext(DestinationContext);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      filteredDestinations.price &&
      filteredDestinations.climate &&
      filteredDestinations.type !== ""
    ) {
      setBtnDisabled(false);
    }
  }, [filteredDestinations]);

  const sendFilteredDestinations = (e) => {
    e.preventDefault();
    fetch("https://travel-genie-mm.uk.r.appspot.com/destinations/filtered", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredDestinations),
    })
      .then((res) => res.json())
      .then((data) => setDestinationResults(data))
      .then(() => navigate("/destinations"))
      .catch((err) => console.error(err));
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <form onSubmit={sendFilteredDestinations} className="form-container">
        <FormControl fullWidth className="form-control">
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filteredDestinations.price}
            label="Price"
            onChange={(event) =>
              setFilteredDestinations({
                ...filteredDestinations,
                price: event.target.value,
              })
            }
          >
            <MenuItem value={"Budget"}>Budget</MenuItem>
            <MenuItem value={"Luxury"}>Luxury</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Climate</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filteredDestinations.climate}
            label="Climate"
            onChange={(event) =>
              setFilteredDestinations({
                ...filteredDestinations,
                climate: event.target.value,
              })
            }
          >
            <MenuItem value={"Summer"}>Summer</MenuItem>
            <MenuItem value={"Winter"}>Winter</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filteredDestinations.type}
            label="Type"
            onChange={(event) =>
              setFilteredDestinations({
                ...filteredDestinations,
                type: event.target.value,
              })
            }
          >
            <MenuItem value={"Domestic"}>Domestic</MenuItem>
            <MenuItem value={"International"}>International</MenuItem>
          </Select>
          <Button
            sx={{
              marginTop: 2,
              backgroundColor: "black",
              color: "white",
              ":hover": {
                bgcolor: "#3a3a3a",
                color: "white",
              },
            }}
            variant="contained"
            type="submit"
            disabled={btnDisabled}
            onClick={sendFilteredDestinations}
          >
            Where To?
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
