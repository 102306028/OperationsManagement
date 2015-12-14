import React from 'react';
import {Locations, Location, NotFound} from 'react-router-component';

// Components
import SiteHeader from './SiteHeader.js';

// Views
import WelcomePage from './WelcomePage.js';
import Inventory from './Inventory.js';
import Marketing from './Marketing.js';

const App = React.createClass({
  render() {
    return (
      <div id='site' >
        <SiteHeader />
        <Locations path={this.props.path}>
          <Location handler={WelcomePage} path='/' />
          <Location handler={Inventory} path='/inventory' />
          <Location handler={Marketing} path='/marketing' />
          <NotFound handler={WelcomePage} />
        </Locations>
      </div>
    )
  }
});

module.exports = App;
