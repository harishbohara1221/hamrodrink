import { Route, Routes } from "react-router-dom";
import "./global.scss";
import Home from "./pages/Home";
import Productdetail from "./pages/Productdetail";
import Aboutus from "./pages/Aboutus";
import Snacks from "./pages/Snacks";
import Harddrinks from "./pages/Harddrinks";
import Softdrinks from "./pages/Softdrinks";
import Productview from "./pages/Productview";
import AddProducts from "./pages/admin/AddProducts";
import AdminLogin from "./pages/admin/AdminLogin";
import HomeLayout from "./components/layout/HomeLayout";

function App() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/harddrinks" element={<Harddrinks />} />
        <Route path="/softdrinks" element={<Softdrinks />} />
        <Route path="/productview" element={<Productview />} />

        {/* Admin side routing */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/addProduct" element={<AddProducts />} />
      </Routes>
    </HomeLayout>
  );
}

export default App;
