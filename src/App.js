import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/HomePage/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApartmentDetail from './components/HomePage/ApartmentDetail/ApartmentDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/apartmentDetail">
          <ApartmentDetail></ApartmentDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
