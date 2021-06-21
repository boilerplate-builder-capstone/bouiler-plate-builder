import React, { useEffect, useRef } from 'react';
import assembleRequestBody from '../../utils'

function FileStructure(props) {
    const { body } = props
    const requestBody = assembleRequestBody(body)

    const prevBodyRef = useRef();
    const previousBody = prevBodyRef.current
    
    useEffect(() => {
        const additions = Object.keys(body).filter(key => !Object.keys(previousBody).includes(key))

        if (body[additions[0]]){
            const changedFiles = [...document.getElementsByClassName(`${additions[0]}change`)]
            changedFiles.forEach(file => {
                if([...file.classList].includes("filechange")){
                    file.classList.toggle("filechange")
                }
                setTimeout((arg) => file.classList.toggle(arg), 50, "filechange")
            })

            const newFiles = [...document.getElementsByClassName(additions[0])]
            newFiles.forEach(file => file.classList.add("fileadd"))
        }
        
        prevBodyRef.current = body;
    }, [body]);

    return (
        <div id="filestructure">
            <h6>Your File Structure</h6>
            <ul>
                {Object.keys(body).length 
                    ? Object.entries(requestBody).map((item, idx) => {
                        let key = item[0]
                        let val = item[1]
                    
                        if (key === "server" && val){
                            return (
                                <div key={idx} className="server">
                                    <li>SERVER</li>
                                    <ul>
                                        <li className="dbchange">startserver.js</li>
                                        <li className="dbchange">modifyserver.js</li>
                                        {val.db
                                            ? <div className="db">
                                                <li>DB</li>
                                                <ul>
                                                    <li>MODELS</li>
                                                    <ul>
                                                        <li>modelname.js</li>
                                                        <li>othermodelname.js</li>
                                                        <li>modelsandrelationships.js</li>
                                                    </ul>
                                                    <li>db.js</li>
                                                    <li>syncandseed.js</li>
                                                </ul>
                                                <li className="extraRouter">ROUTES</li>
                                                    <ul>
                                                        <li>individualrouter.js</li>
                                                    </ul>
                                            </div>
                                            :null
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        if (key === "react" && val){
                            let reduxchange = "reduxchange"
                            let reactRouterchange = "reactRouterchange"
                            const reacthookschange = "reacthookschange"
                            const classes = [reduxchange, reactRouterchange, reacthookschange].join(' ')
                            return (
                                <div key={idx} className="react">
                                    <li>CLIENT</li>
                                    <ul>
                                        <li>index.js</li>
                                        <li>COMPONENTS</li>
                                        <ul>
                                            <li className={classes}>App.js</li>
                                        </ul>
                                        {val.redux
                                            ? <div className="redux">
                                                <li>REACTREDUX</li>
                                                <ul>
                                                    <li>actions.js</li>
                                                    <li>reducer.js</li>
                                                    <li>rootreducer.js</li>
                                                    <li>store.js</li>
                                                </ul>
                                            </div>
                                            : null
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    })
                    : null
                }
            </ul>
        </div>
    )
}

export default FileStructure