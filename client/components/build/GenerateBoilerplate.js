import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

function GenerateBoilerplate(props) {
    const { backEndResponses, frontEndResponses } = props

    const generateBoilerplate = async () => {
        try{
        console.log("boilerplate will generate now")
        console.log("This will be the request body:", {...backEndResponses, ...frontEndResponses})
        // Axios call to the server to grab documents
        const  { data }= await axios.post(`api/completedboiler`, {...backEndResponses, ...frontEndResponses}, { responseType: 'arraybuffer' })
        

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