import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';

// components
import Admin from '../Admin/Admin';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Thanks from '../Thanks/Thanks';

class App extends Component {
  render() {
    
    

    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <p className="navBar"><Link to="/feelings">Feedback Form</Link> - <Link to="/admin">Admin Page</Link></p>
        </header>
        <br/>
        <div className="feedbackForm">
          <Route exact path="/feelings" component={Feelings} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/supported" component={Supported} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/thanks" component={Thanks} />
        </div>
        </Router>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
