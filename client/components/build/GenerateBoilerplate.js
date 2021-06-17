import React from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'
import axios from 'axios'

function GenerateBoilerplate(props) {
    const { body } = props

    const generateBoilerplate = async () => {
        try{
            const assembleRequestBody = (body) => {
                const requestBody = {}
                // backend assembling
                if (body.server){
                    requestBody.server = {}
                    if (body.db){
                        requestBody.server.db = {
                            extraRouter: body.extraRouter
                        }
                    } else if (!body.db){
                        requestBody.server.db = false
                    }
                } else {
                    requestBody.server = false
                }
                //frontend assembling
                if (body.react){
                    requestBody.react = {
                        reactRouter: body.reactRouter,
                        redux: body.redux,
                        reacthooks: body.reacthooks
                    }
                } else {
                    requestBody.react = false
                }
                return requestBody
            }
        const requestBody = assembleRequestBody(body)
        console.log("This will be the request body:", requestBody)
        
        // Axios call to the server to grab documents
        const  { data }= await axios.post(`api/completedboiler`, requestBody, { responseType: 'arraybuffer' })
        

        let blob = await new Blob([data], { type: 'application/zip' }) 

        const link = document.createElement('a');
      // Browsers that support HTML5 download attribute
      
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'Boilerplate');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        }catch(er){
            console.log(er)
        }
    }

    return (
        <div>
            <h1>Your boilerplate is ready!</h1>
            <Button onClick={generateBoilerplate}>Download Boilerplate</Button>
            <h3>Here's what's in it:</h3>
            
            <Accordion>
                {Object.entries(body).map((item, idx) => {
                    let key = item[0]
                    let val = item[1]

                    if (val){
                        if(key === "server"){
                            return (
                                <Card key={idx}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Node.js & Express
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Your server uses Node.js and Express
                                            <ul>
                                                <li><a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">Node.js Documentation</a></li>
                                                <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express Documentation</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        }
                        if(key === "db"){
                            return (
                                <Card key={idx}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
                                            PostgreSQL & Sequelize
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx}>
                                        <Card.Body>
                                            Your database management system is PostgreSQL, using Sequelize ORM.
                                            <ul>
                                                <li><a href="https://www.postgresql.org/docs/current/" target="_blank" rel="noopener noreferrer">PostgreSQL Documentation</a></li>
                                                <li><a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize Documentation</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        }
                        if(key === "react"){
                            return (
                                <Card key={idx}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
                                            React
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx}>
                                        <Card.Body>
                                            Your boilerplate is set up to utilize the React library for building your user interface. It uses Babel to compile your JavaScript and Webpack to bundle your modules.
                                            <ul>
                                                <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
                                                <li><a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">Webpack Documentation</a></li>
                                                <li><a href="https://babeljs.io/docs/en/index.html" target="_blank" rel="noopener noreferrer">Babel Documentation</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        }
                        if(key === "redux"){
                            return (
                                <Card key={idx}>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx}>
                                            React Redux
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx}>
                                        <Card.Body>
                                            Your boilerplate will allow you to use React Redux to manage state on the front end.
                                            <ul>
                                                <li><a href="https://react-redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">React Redux Documentation</a></li>
                                                <li><a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">Redux Documentation</a></li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        }
                    }
                })}
            </Accordion>
        </div>
    )
}

export default GenerateBoilerplate