import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Properties from './Properties';
import PropertyPage from './PropertyPage';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/properties" exact component={Properties}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/properties/:id" component={PropertyPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;