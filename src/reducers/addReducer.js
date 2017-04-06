const addReducer = (state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.payload
        case 'REMOVE':
            return state-action.payload
        default:
            return state
    }
}
export default addReducer