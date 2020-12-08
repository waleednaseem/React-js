import React from 'react'

export default function Form({userInfo}) {
    return (
        <div>
            <h4>Name :{userInfo.name}</h4>
           <h4>image :</h4> <img src={userInfo.avatar} alt='user image' />
        </div>
    )
}
