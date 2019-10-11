
import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
// import description from './pages/Description';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/description" component={}/> */}
      <Route patth="/cart" component={Cart}/>
    </Switch>
  )
}


