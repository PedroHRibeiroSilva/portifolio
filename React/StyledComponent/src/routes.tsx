import { Routes as Router, Route } from "react-router-dom";
import Colections from "./pages/colections/colections";
import Custom from "./pages/custom/custom";
import Events from "./pages/events/events";
import Login from "./pages/login/login";
import Shop from "./pages/shop/shop";
import Signup from "./pages/signup/signup";

const Routes = () => (
  <Router>
    <Route path="/shop" element={<Shop />} />
    <Route path="/colections" element={<Colections />} />
    <Route path="/custom" element={<Custom />} />
    <Route path="/forevents" element={<Events />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Router>
);

export default Routes;
