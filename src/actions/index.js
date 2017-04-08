export const addHuman = (text)=>{
    console.log(text)
    return{
        type:'ADD',
        payload:text
    }
}