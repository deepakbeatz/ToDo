import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Register from './Containers/Register';

class app extends Component{
  render(){
    return(
      <Router>
        <div class="App">
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/signup" exact component={Register} />
        </div>
      </Router>
    )
  }
}

export default app;
