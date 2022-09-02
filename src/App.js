import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import CategoryCard from "./components/CategoryCard";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <>
      <div class="container-fluid">
        <HomeScreen />
        <div class="row"></div>
      </div>
    </>
  );
}

export default App;
