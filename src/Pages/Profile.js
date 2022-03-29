import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
function Profile() {
    let nav = useNavigate();
    let { USERNAME } = useParams()
    return (
    <div> 
        THIS IS THE PROFILE PAGE FOR  {USERNAME}<br/>
        <button onClick={() => {nav('/about')}}> Change to about page </button>
    </div>
    ); 
}
export default Profile