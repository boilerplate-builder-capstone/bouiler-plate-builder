import axios from 'axios'
import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function PrebuiltBoilers() {

    const generateBoilerplate = async () => {   
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
            console.log(boilerType)
        }
    }

  return (
    <div>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
                <Card.Title>CRUD App</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Create an app that allows users to Create, Read, Update, and Destroy resources in your database.
                </Card.Text>
                <Button onClick={() => onClick("basicCRUD")}>Basic</Button>
                <Button>React w/ Webpack</Button>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </div>
  );
}

export default PrebuiltBoilers;