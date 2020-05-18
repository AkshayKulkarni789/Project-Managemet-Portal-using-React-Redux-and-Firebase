import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from "./components/layout/navbar"
import Dash from './components/dash/dashboard';
import Details from "./components/project/details"
import signin from './components/auth/signin';
import signup from './components/auth/signup';
import create from './components/project/create';
import home from './components/layout/home'

class App extends Component{
  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route path="/dashboard" component={Dash}></Route>
            <Route path="/project/:id" component={Details}></Route>
            <Route path="/signin" component={signin}></Route>
            <Route path="/signup" component={signup}></Route>
            <Route path="/create" component={create}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
