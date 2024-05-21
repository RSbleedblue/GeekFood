import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes/Quotes";
import Home from "./components/Home/Home";
import Restaurants from "./components/Restaurants/Restaurants";
import Food from "./components/Food/Food";
import FoodCategory from "./components/Food/FoodCategoryPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full items-center justify-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element= {<Quotes/>} />
          <Route path="/restaurants" element = {<Restaurants/>}/>
          <Route path="/foods" element = {<Food/>}>
          </Route>
          <Route path="/foods/:categoryId" element = {<FoodCategory/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
