import React, { useContext } from "react";
import DestinationCard from "./DestinationCard";
import { DestinationContext } from '../App'


export default function GetDestinations() {
  const { destinationResults } = useContext(DestinationContext);
    return (
    <section className="main-section">
      {!destinationResults ? (
        <h2>Loading...</h2>
      ) : (
        destinationResults.map((destination) => {
          return (
            <DestinationCard key={destination.id} id={destination.id} name={destination.destination} image={destination.image} description={destination.description} favorite={destination.favorite}>
            <div>
              <p>{destination.destination}</p>
              <p>{destination.description}</p>
              <img src={destination.image} style={{width: "400px"}}/>
            </div>
            </DestinationCard>
          );
        })
      )}
    </section>
  );
}
