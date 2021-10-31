import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import AddServices from './Components/AddServices/AddServices';
import Orders from './Components/Orders/Orders';
import AllOrders from './Components/AllOrders/AllOrders/AllOrders';
import Services from './Components/Home/Services/Services/Services';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      
      <Router>
      <AuthProvider>
       <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/home">
            <Home />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
        <PrivateRoute path="/userOrders">
            <Orders />
          </PrivateRoute>
        <PrivateRoute path="/allOrders">
            <AllOrders />
          </PrivateRoute>
        <PrivateRoute path="/addService">
            <AddServices />
          </PrivateRoute>
          
          <Route path="/services">
            <Services />
            </Route>
          <PrivateRoute path="/details/:serviceId">
            <ServiceDetail />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
          
        </Switch>
        <Footer></Footer>
      
        </AuthProvider>
    </Router>
    
    </div>
  );
}

export default App;
