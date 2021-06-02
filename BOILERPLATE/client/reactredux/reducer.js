const YOUR_COMMAND = 'YOUR_COMMAND'

const singleReducer = (state = [], action) => {
    if (action.type === YOUR_COMMAND){
        // Use the action's data to modify state
        state = [...state, action.data]
    }
    return state
}

export default singleReducer;