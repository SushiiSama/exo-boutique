import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import ContactForm from "./components/ContactForm";
import HomeScreen from "./pages/HomeScreen";




function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
  if(darkMode){
  document.body.classList.add("dark");
} else{
document.body.classList.remove("dark");
}
},[darkMode]);


  return (
    <>
      <div class="container-fluid">
        <HomeScreen />
        <ContactForm />
          <button onClick={() => setDarkMode(!darkMode)} >toggle dark mode </button>
        <div class="row"></div>
      </div>
    </>
  );
}

export default App;
