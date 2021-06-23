import axios from 'axios'
import React from 'react';
import { Card, CardColumns, Button, Jumbotron, Container } from 'react-bootstrap';

function PrebuiltBoilers() {

    const generateBoilerplate = async (requestBody) => {   
        try{
            console.log("This will be the request body:", requestBody)

            // Axios call to the server to grab documents
            const  { data }= await axios.post(`api/completedboiler`, requestBody, { responseType: 'arraybuffer' })
            
            let blob = await new Blob([data], { type: 'application/zip' }) 

            const link = document.createElement('a');
        // Browsers that support HTML5 download attribute
        //need to adjust this for react!!!!!!!!!!!!!!!!!!!
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

    const onClick = (boilerType) => {
        if (boilerType === "basicCRUD"){
            const requestBody = {
                server: {
                    db: {
                        extraRouter: false
                    }
                },
                react: false
            }
            generateBoilerplate(requestBody)
        }
        if (boilerType === "staticWebPage"){
            const requestBody = {
                server: false,
                react: false,
            }
            generateBoilerplate(requestBody)
        }
        if (boilerType === "fullstack"){
            const requestBody = {
                server: {
                    db: {
                        extraRouter: true
                    }
                },
                react: {
                    reactRouter: true,
                    redux: true,
                    reacthooks:true
                }
            }
            generateBoilerplate(requestBody)
        }
    }

  return (
    <div>
        <Jumbotron fluid>
            <Container>
                <h1>Choose a prebuilt boilerplate.</h1>
                <p>
                Get right to it with one of our prebuilt boilerplates for a few common types of projects.
                </p>
            </Container>
        </Jumbotron>

        <CardColumns id="prebuiltcontainer">
            <Card className="prebuiltcard">
                <Card.Body>
                    <Card.Title>Static Web Page</Card.Title>
                    <Card.Text className="mb-2 text-muted">HTML | CSS</Card.Text>
                    <Card.Body style={{display: "flex", flexDirection: "column"}}>
                        <p>Create a web page that doesn't require a server.</p>
                        <Button onClick={() => onClick("staticWebPage")}>Generate</Button>
                    </Card.Body>
                </Card.Body>
            </Card>
            
            <Card className="prebuiltcard">
                <Card.Body>
                    <Card.Title>Basic CRUD App</Card.Title>
                    <Card.Text className="mb-2 text-muted">Express | PostgreSQL | Sequelize | HTML | CSS</Card.Text>
                    <Card.Body style={{display: "flex", flexDirection: "column"}}>
                        <p>Create an app that allows users to Create, Read, Update, and Destroy resources in your database</p>
                        <Button onClick={() => onClick("basicCRUD")}>Generate</Button>
                    </Card.Body>
                </Card.Body>
            </Card>

            <Card className="prebuiltcard">
                <Card.Body>
                    <Card.Title>Full Stack Application: "The Works" </Card.Title>
                    <Card.Text className="mb-2 text-muted">Express | PostgreSQL | Sequelize | React | Webpack | React Redux</Card.Text>
                    <Card.Body style={{display: "flex", flexDirection: "column"}}>
                        <p>Create a full stack application that utilizes React & Redux on the front end with Express, PostgreSQL, and Sequelize on the back end.</p>
                        <Button onClick={() => onClick("fullstack")}>Generate</Button>
                    </Card.Body>
                </Card.Body>
            </Card>
        </CardColumns>
    </div>
        
  
  );
}

export default PrebuiltBoilers;