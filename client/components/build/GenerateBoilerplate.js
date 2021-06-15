import React from 'react'
import { Button } from 'react-bootstrap'
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
                    requestBody.server.db = {}
                    if (body.extraRouter){
                        requestBody.server.db.extraRouter = true
                    } else if (!body.extraRouter){
                        requestBody.server.db.extraRouter = false
                    }
                } else if (!body.db){
                    requestBody.server.db = false
                }
            }
            else if (!body.server){
                requestBody.server = false
            }
            //frontend assembling
            if (body.react){
                requestBody.react = {}
                if (body.reactRouter){
                    requestBody.react.reactRouter = true
                } else {
                    requestBody.react.reactRouter = false
                }
                if (body.redux){
                    requestBody.react.redux = true
                    requestBody.react.reacthooks = false
                } else if (body.reacthooks){
                    requestBody.react.redux = false
                    requestBody.react.reacthooks = true
                } else {
                    requestBody.react.redux = false
                    requestBody.react.reacthooks = false
                }
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
            <h1>DONE</h1>
            <Button onClick={generateBoilerplate}>Download Boilerplate</Button>
        </div>
    )
}

export default GenerateBoilerplate 