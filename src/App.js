import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./Login/Login";
import Register from "./Login/Register";
import AuthProvider from "./context/AuthProvider";
// import AddProducts from "./components/Admin/AddProducts";
import BuyProduct from "./components/BuyProduct/BuyProduct";
import PrivateRoute from './context/PrivateRoute/PrivateRoute';
import DashBoard from "./pages/DashBoard/DashBoard";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          
          <Route  path="/register">
            <Register />
          </Route>
          <PrivateRoute  path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="/productDetails">
            <ProductDetails/>
          </Route>
          <PrivateRoute  path="/products/:id">
            <BuyProduct />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route   path="*">
            <NotFound />
          </Route>
          
        </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
