import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './container/Home'
import ItemDetail from './container/ItemDetail'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items/*" component={ItemDetail} />
        <Route path="/items?search=*" component={Home} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default App;