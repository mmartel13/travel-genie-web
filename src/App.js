import React from "react";
import { useState, createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const DestinationContext = createContext();

export default function App() {
  const [destinationResults, setDestinationResults] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState({
    price: "",
    climate: "",
    type: "",
  });
  return (
    <div>
      <DestinationContext.Provider
        value={{ destinationResults, setDestinationResults, filteredDestinations, setFilteredDestinations }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        <Footer />
      </DestinationContext.Provider>
    </div>
  );
}
