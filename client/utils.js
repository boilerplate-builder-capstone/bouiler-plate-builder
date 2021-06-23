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
    } else if (body.react === false){
        requestBody.react = false
    }
    return requestBody
}

export default assembleRequestBody