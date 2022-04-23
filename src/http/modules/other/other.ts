import axios from "axios"
const other = {
    getData(){
        return axios({
            method:"POST",
            url:"/getSingleJoke?sid=28654780",
            headers: {
                'Content-Type': 'application/json'
            },
        })
    },
}
export default other;
