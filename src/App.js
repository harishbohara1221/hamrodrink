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
    <Routes>
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/productdetail"
        element={
          <HomeLayout>
            <Productdetail />
          </HomeLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <HomeLayout>
            <Aboutus />
          </HomeLayout>
        }
      />
      <Route
        path="/snacks"
        element={
          <HomeLayout>
            <Snacks />
          </HomeLayout>
        }
      />
      <Route
        path="/harddrinks"
        element={
          <HomeLayout>
            <Harddrinks />
          </HomeLayout>
        }
      />
      <Route
        path="/softdrinks"
        element={
          <HomeLayout>
            <Softdrinks />
          </HomeLayout>
        }
      />
      <Route
        path="/productview"
        element={
          <HomeLayout>
            <Productview />
          </HomeLayout>
        }
      />
      {/* Admin side routing */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/addProduct" element={<AddProducts />} />
    </Routes>
  );
}

export default App;
