import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import HomeScreen from "./pages/HomeScreen";
import {Routes , Route , Link} from "react-router-dom"
import PageAceuille from "./pages/PageAceuille";


function Home() {
  return (
    <>
      <main>
       <NavBar/>
        <PageAceuille />
       
     
      </main>
      
    </>
  );
}

function Produit() {
  return (
    <>
      <main>
        
        <NavBar/>
        <HomeScreen />
      </main>
    </>
  );
}




function App() {

  

  return (
    <>

    
    <Routes>
      <Route path ="/" element = {<Home/>}  />
      <Route path="/produit" element ={<Produit />} />
    </Routes>
      
    
    
    </>
  );
}

export default App;
