import React from 'react';
import { StateProvider } from "./context/store";
import { initialState, reducer } from './context/reducer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar></Navbar>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/apt" component={ApartmentDetail} />
        </Switch>  */}
      </StateProvider>
    </Router>
  );
}

export default App;
