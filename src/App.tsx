import React from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar.tsx/Navbar";
import NewArrival from "./components/New Arrival/NewArrival";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <NewArrival />
      </main>
      <Footer />
    </div>
  );
}

export default App;
