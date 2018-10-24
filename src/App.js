import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import DescriptionStory from './DescriptionStory/DescriptionStory'
import { Route, Switch } from 'react-router-dom';
import Search from './Search';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/:typo" component={DescriptionStory}/>
        </Switch>
      </div>
    );
  }
}

export default App;
