import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home'
import Build from './build/Build'
import NavBar from './NavBar'
import Questions from './Questions'


function App() {
    
    return (
        <div>
            <Router>
                <NavBar />
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/build">
                    <Build/>
                </Route>
                <Route exact path="/build/customize">
                    <Questions />
                </Route>
            </Router>
        </div>
    )
}

export default App 
