const deleteReducer = (state=0,action)=>{
    switch(action.type){
        case 'wdwd':
            return state+action.payload
        case 'ddddd':
            return state-action.payload
        default:
            return state
    }
}
export default deleteReducer