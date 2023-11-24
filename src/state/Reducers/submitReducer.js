const submitReducer=(state="",action)=>{
    if(action.type==="submit"){
        return action.payload
    }
    else{
        return state
    }
}
export default submitReducer