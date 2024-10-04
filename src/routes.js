import Template from "./template/Template";
import ProductDetail from "./components/products/detail/ProductDetail";
import { Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPW";

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
