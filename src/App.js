import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApartmentDetail from './components/HomePage/ApartmentDetail/ApartmentDetail';
import Bookings from './components/Dashboard/Bookings/Bookings';
import AddHouse from './components/Dashboard/AddHouse/AddHouse';
import MyRent from './components/Dashboard/MyRent/MyRent';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/apartmentDetail">
          <ApartmentDetail />
        </Route>        
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/addHouse">
          <AddHouse />
        </Route>
        <Route path="/myRent">
          <MyRent />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
