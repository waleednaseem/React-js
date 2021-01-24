import axios from 'axios'
export const setusername=(e)=>{
    return{
        type:'user_name',
        payload:e
    }
}
export const getdata=(e,username)=>{
    // e.persist()
    return async dispatch=>{
        try {
            const respo= await axios.get(`https://api.github.com/users/${username}`, {
                headers:{
                    Authorization: "Bearer 35197c40727fb27dd33983c7e2ad9009550f5443",
                   
                }
            })
            
            dispatch({
                type:'submit',
                e:e,
                data:respo.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}