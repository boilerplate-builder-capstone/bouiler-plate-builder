import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Transition } from 'react-transition-group'
import ContentAccordion from './ContentAccordion'
import assembleRequestBody from '../../utils'

function GenerateBoilerplate(props) {
    const { body, transition } = props
    const requestBody = assembleRequestBody(body)

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

    const duration = 500;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }
    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <Transition in={transition} timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
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
                </div>
            )}
        </Transition>
    )
}

export default GenerateBoilerplate