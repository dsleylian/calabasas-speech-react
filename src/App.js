import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import AboutUs from './components/AboutUsComponent';
import FreeResources from './components/FreeResourcesComponent';
import ContactUs from './components/ContactUsComponent'



function App() {
  return (
    <div className="App">
        <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/aboutus' component={AboutUs}/>
                <Route path='/freeresources'  component={FreeResources}/>
                <Route exact path='/contactus' component={ContactUs}/>
                <Route exact path='/blog'  />
                <Redirect to='/' />
              </Switch>
        <Footer />
    </div>
  );
}

export default App;
