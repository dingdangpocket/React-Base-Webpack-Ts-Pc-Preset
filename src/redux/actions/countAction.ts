export const increment = (payload:number)=>{
    return {
        type:"increment",
        payload
    }
}

export const decrement = (payload:number)=>{
    return {
        type:"decrement",
        payload
    }
}

