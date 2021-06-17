import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import ContentAccordion from './ContentAccordion'

function GenerateBoilerplate(props) {
    const { body } = props

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

    const generateBoilerplate = async () => {   
        try{
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
        } catch(er){
            console.log(er)
        }
    }

    return (
        <div id="generate">
            <div id="download">
                <h2>Your boilerplate is ready!</h2>
                <Button onClick={generateBoilerplate}>Download Boilerplate</Button>
            </div>
            
            {!requestBody.react && !requestBody.server
                ? null
                : <ContentAccordion requestBody={requestBody} />
            }
        </div>
    )
}

export default GenerateBoilerplate