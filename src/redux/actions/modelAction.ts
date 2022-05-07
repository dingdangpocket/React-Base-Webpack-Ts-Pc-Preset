export const changeToDefaultLoginModelAC = (payload:boolean)=>{
    return {
        type:"changeDefaultLoginModelStatus",
        payload
    }
}
export const changeToAnotherLoginWaysModelAC = (payload:boolean)=>{
    return {
        type:"changeAnotherLoginWaysModelStatus",
        payload
    }
}
export const changeChatModelAC = (payload:boolean)=>{
    return {
        type:"changeChatModelStatus",
        payload
    }
}