import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!(user.username&&user.password)) return <div>please login</div>

    return (

    <>
    <div>Welcome {user.username}</div>
    <div>Password is {user.password}</div>
    </>
    
    )
}
    
    
    

export default Profile