import React from 'react';
import { StateProvider } from "./context/store";
import { initialState, reducer } from './context/reducer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Gallery from './components/gallery/Gallery'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/gallery" component={Gallery} />
        </Switch> 
      </StateProvider>
    </Router>
  );
}

export default App;
