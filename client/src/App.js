import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './views/Header';
import HomeView from './views/HomeView';
import ApartmentView from './views/ApartmentView';
import LocationsView from './views/LocationsView';

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={HomeView}/>
              <Route exact path="/apartments/:apartmentId" component={ApartmentView}/>
              <Route exact path="/locations" component={LocationsView}/>
            </div>
          </Router>
    );
  }
}

export default App;
