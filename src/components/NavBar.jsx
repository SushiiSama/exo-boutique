import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

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

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
      <div class="form-check form-switch m-3 ">
  <input class="form-check-input " type="checkbox" id="flexSwitchCheckDefault"  onChange={()=> setDarkMode(!darkMode)}/>
  <label class="form-check-label " for="flexSwitchCheckDefault">{darkMode ? "dark " : "light"}</label>
</div>

      
        <li className="nav-item m-3">
        <nav>
        <Link to="/">Home</Link>
      </nav>
        </li>
        <li className="nav-item m-3">
        <nav>
        <Link to="/produit">produit</Link>
      </nav>
        </li>
      
      </ul>
   
    </div>
  </div>
</nav>
      </>
    );
};

export default NavBar;