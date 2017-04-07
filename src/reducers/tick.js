const tick = (state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state+action.val
        case 'REMOVE':
            return state-action.val
        default:
            return state
    }
}

export default tick