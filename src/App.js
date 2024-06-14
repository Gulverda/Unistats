import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Calendar from './components/pages/calendar/calendar.jsx';
import FAQ from './components/pages/faqi/FAQ.jsx';
import Statistic from './components/pages/statistics/Page.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyChatBot from './components/MyChatBot';
import AboutUs from './components/pages/aboutUs/aboutUs.jsx';
import Details from './components/pages/details/Details.jsx'; // Import the new Details component


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Statistic" component={Statistic}/>
          <Route path="/aboutUs" component={AboutUs}/>
          <Route path="/details" component={Details} /> {/* Add the new Details route */}
          <Route path="/" component={Home} /> {/* This will be the default route */}
        </Switch>
      </Router>
      <MyChatBot/>
    </div>
  );
}

export default App;
