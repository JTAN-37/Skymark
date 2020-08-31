import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Properties from './Properties';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/properties" component={Properties}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;