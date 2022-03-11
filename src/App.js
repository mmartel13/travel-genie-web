import React from "react";
import { useState, createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./scenes/Main";
import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const DestinationContext = createContext();

export default function App() {
  const [destinationResults, setDestinationResults] = useState([]);
  return (
    <div>
      <DestinationContext.Provider
        value={{ destinationResults, setDestinationResults }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        <Footer />
      </DestinationContext.Provider>
    </div>
  );
}
