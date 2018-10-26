import React, { Component } from 'react'
import './App.css'
import DescriptionStory from './DescriptionStory/DescriptionStory'
import Maps from "./Maps";
import { Route, Switch } from 'react-router-dom';
import Search from './Search';


import Footer from './Components/footer';
import Header from './Components/header';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bgimg">
     
         <Header />
              

            

        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/map/:latlng(\d{1,3}.\d*,\d{1,3}.\d*)" component={Maps}/>
          <Route exact path="/:typo/:latlng(\d{1,3}.\d*,\d{1,3}.\d*)" component={DescriptionStory}/>
        </Switch>
        </div>
        <div>
            <Footer />
            </div>
      </div>
      
    );
  }
}


export default App;
