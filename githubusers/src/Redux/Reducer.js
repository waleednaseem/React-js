const initState={
    username:'',
    follower:'',
    following:'',
    image:'',
    location:'',
    fullname:'',
    error:''
}
export const Reducer=(state=initState,action)=>{
    switch(action.type){
        case 'user_name':
        let crrentusername = action.payload.target.value    
            return {
                ...state,
                username: crrentusername
            }
            break;
        case 'submit':
            console.log(action.data)
            let data = {
                username: action.data.login,
                follower: action.data.follower,
                following: action.data.following,
                image: action.data.avatar_url,
                location: action.data.location,
                fullname: action.data.name
            }
            if(data) {
                return data
            } else {
            const error={ error:'user not found'}
            return {...state,error}
            }
            break;

        default:
            return state
    }
}
export default Reducer