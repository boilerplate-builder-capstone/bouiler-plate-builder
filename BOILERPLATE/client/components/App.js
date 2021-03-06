import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {
    constructor(props){
        super(props)
        this.state = null
    }

    // componentDidMount(){}

    // componentDidUpdate(){}

    render(){
        return(
            <div>
                <h1>Hello world</h1>
                <p>Welcome to your web app!</p>
                <Router>
                    {/* <Route component={YourComponentName} path="/path" /> */}
                    <Switch>
                        {/* <Route component={YourComponentName2} path="/path2" /> */}
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateName: state.stateName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        functionName: () => dispatch(functionFromDispatch())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App) 