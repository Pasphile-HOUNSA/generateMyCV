import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">

        <Hero />

        <CVForm />

        <CVPreview />

      </main>

      <Footer />

    </div>
  )
}

export default App
