import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home'
import Build from './build/Build'
import NavBar from './NavBar'
import QuestionWalkthrough from './questionwalkthrough/QuestionWalkthrough'


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
                    <QuestionWalkthrough />
                </Route>
            </Router>
        </div>
    )
}

export default App 
