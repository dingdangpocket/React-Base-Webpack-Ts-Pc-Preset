

export type modelActionType = {
    type: string;
    payload: boolean;
  };

export default function reducer(state = {
    DefaultLoginModeltatus:false,
    AnotherLoginWaysModelStatus:false,
    ChatModelStatus:false
}, action:modelActionType) {
   switch (action.type) {
       case "changeDefaultLoginModelStatus":
           console.log("你好",action);
           return {
               ...state,
               DefaultLoginModeltatus:action.payload
           }
        case "changeAnotherLoginWaysModelStatus":
            return {
                ...state,
                AnotherLoginWaysModelStatus:action.payload
            }
        case "changeChatModelStatus":
            return {
                ...state,
                ChatModelStatus:action.payload
            }
       default:
           return state
   }
}
