import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin/Admin';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';


function App() {

  return (
    <>
      <AuthProvider>
        <Router >
          <Switch>
            <Route exact path='/'>
              <Home ></Home>
            </Route>
            <Route path='/home'>
              <Home ></Home>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/about-us'>
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path='/cart'>
              <ShoppingCart></ShoppingCart>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </>
  );
}

export default App;
