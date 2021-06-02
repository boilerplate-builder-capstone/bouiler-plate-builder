import axios from 'axios'
const YOUR_COMMAND = 'YOUR_COMMAND'

const actionCreator = (data) => {
    return {
        type: YOUR_COMMAND,
        data
    }
}

export const someThunk = (input) => {
    return async(dispatch) => {
        try {
            const data = (await axios.get('/pathName')).data
            dispatch(actionCreator(data))
        } catch (error) {
            console.log(error)
        }
    }
}