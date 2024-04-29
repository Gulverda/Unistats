import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Calendar from './components/pages/calendar/calendar.jsx';
import FAQ from './components/pages/FAQ.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/calendar" component={Calendar} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/" component={Home} /> {/* This will be the default route */}
      </Switch>
    </Router>
  );
}

export default App;
