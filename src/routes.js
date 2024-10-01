import Template from "./template/Template";
import ProductDetail from "./components/products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ProductList from "./components/products/ProductList";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function Routes() {
  return (
    <Template>
      <Switch>
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
      </Switch>
    </Template>
  );
}

export default Routes;
