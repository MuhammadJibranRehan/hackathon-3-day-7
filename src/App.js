import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
// import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Products from './Pages/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import PlaceOrderScreen from './Pages/PlaceOrder/PlaceOrderScreen';
import DeliveryProvider from './Contexts/DeliveryProvider';
import OrderCompleted from './Pages/OrderCompleted/OrderCompleted';
import ContactUs from './ContactUs/ContactUs';



function App() {

  return (
    <>
      <AuthProvider>
        <Router >
          <DeliveryProvider>
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
              <Route path='/contact'>
                <ContactUs></ContactUs>
              </Route>
              {/* <PrivateRoute path='/cart'>
              <ShoppingCart></ShoppingCart>
            </PrivateRoute> */}
              <PrivateRoute path='/cart'>
                <PlaceOrderScreen></PlaceOrderScreen>
              </PrivateRoute>
              <PrivateRoute path='/order-completed'>
                <OrderCompleted></OrderCompleted>
              </PrivateRoute>
              <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path='/purchase/:id'>
                <Purchase></Purchase>
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
          </DeliveryProvider>
        </Router >
      </AuthProvider>
    </>
  );
}

export default App;
