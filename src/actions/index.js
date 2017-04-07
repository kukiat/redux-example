export const add = (x)=>{
    console.log('add')
    return {
        type:'ADD',
        val:x
    }
}

export const remove = (x)=>{
    return {
        type:'REMOVE',
        val:x
    }
}