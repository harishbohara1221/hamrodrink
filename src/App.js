import { Route, Routes } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home";
import Productdetail from "./pages/Productdetail";
import Aboutus from "./pages/Aboutus";
import Snacks from "./pages/Snacks";
import Harddrinks from "./pages/Harddrinks";
import Softdrinks from "./pages/Softdrinks";
import Productview from "./pages/Productview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetail" element={<Productdetail />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/harddrinks" element={<Harddrinks />} />
      <Route path="/softdrinks" element={<Softdrinks />} />
      <Route path="/productview" element={<Productview />} />
      
    </Routes>
  );
}

export default App;
