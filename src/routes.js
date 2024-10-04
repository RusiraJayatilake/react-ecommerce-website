import { Route } from "react-router-dom";
// template
import Template from "./template/Template";
// components
import ProductDetail from "./components/products/detail/ProductDetail";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";
import ForgotPassword from "./components/ForgotPW";
// pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function Routes() {
  return (
    <Template>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/products" exact>
        <ProductList />
      </Route>
      <Route path="/products/:slug">
        <ProductDetail />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <Route path="/lostpassword" exact>
        <ForgotPassword />
      </Route>
    </Template>
  );
}

export default Routes;
