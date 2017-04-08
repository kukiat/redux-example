const todoReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD':
            const newOJ  = {
                text:action.payload,
            }
            return [
                ...state,
                newOJ
            ]
            break;
        default:
            return state
    }

}
export default todoReducer