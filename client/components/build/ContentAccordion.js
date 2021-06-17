import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

function ContentAccordion(props) {
    const { requestBody } = props

    return (
        <div id="accordion">
            <h4>Here's what's in it:</h4> 
            <Accordion>
                {Object.entries(requestBody).map((item, idx) => {
                    let key = item[0]
                    let val = item[1]

                    if (key === "server" && val){
                        return (
                            <div key={idx}>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Node.js & Express
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Your app's server is set up to run with Node.js and Express.
                                            <ul>
                                                <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">Node.js Documentation</a></li>
                                                <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express Documentation</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {val.db
                                    ? <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={idx + 20}>
                                                PostgreSQL & Sequelize
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={idx + 20}>
                                            <Card.Body>
                                                Your database management system is PostgreSQL, using Sequelize ORM.
                                                <ul>
                                                    <li><a href="https://www.postgresql.org/docs/current/" target="_blank" rel="noopener noreferrer">PostgreSQL Documentation</a></li>
                                                    <li><a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize Documentation</a></li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    : null
                                }
                            </div>
                        )
                    }

                    if (key === "react" && val){
                        return (
                            <div key={idx}>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
                                            React
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx}>
                                        <Card.Body>
                                            Your boilerplate is set up to utilize the React library for building your user interface. It uses Babel to compile your JavaScript and Webpack to bundle your modules.
                                            {val.reactRouter 
                                                ? ` Because you also asked to use React Router, your App.js file is equipped to use HashRouter (imported as "Router") to route users to different parts of your application.` 
                                                : null
                                            }
                                            <ul>
                                                <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
                                                <li><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">Webpack Documentation</a></li>
                                                <li><a href="https://babeljs.io/docs/en/index.html" target="_blank" rel="noopener noreferrer">Babel Documentation</a></li>
                                                {val.reactRouter 
                                                    ? <li><a href="https://reactrouter.com/web/api/HashRouter" target="_blank" rel="noopener noreferrer">React HashRouter Documentation</a></li>
                                                    : null
                                                }
                                            </ul>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                {val.redux
                                    ? <Card key={idx}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={idx + 20}>
                                                React Redux
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={idx + 20}>
                                            <Card.Body>
                                                Your boilerplate will allow you to use React Redux to manage state on the front end.
                                                {val.reacthooks 
                                                    ? " Because you also asked to use React Hooks, we've set up your App.js file to include an example of the useState and useEffect hooks." 
                                                    : null
                                                }
                                                <ul>
                                                    <li><a href="https://react-redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">React Redux Documentation</a></li>
                                                    <li><a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">Redux Documentation</a></li>
                                                    {val.reacthooks 
                                                        ? <li><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">React Hooks Documentation</a></li>
                                                        : null
                                                    }
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    : null
                                }
                            </div>
                        )
                    }
                })}
            </Accordion>
        </div>
    )
}

export default ContentAccordion