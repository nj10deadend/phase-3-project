import User from "./User";
import {useState, useEffect} from 'react';


function UsersList (props) {


    const renderUsers = props.fetchedUsers.map(eachUser => {
        return (
            
            <User key={eachUser.id}eachUser={eachUser} />
            
        )
    })

    const [form, setForm] = useState( {
        name: "",
        profile_pic_url: ""
    } );

    function changeForm(z) {
        let y = z.target.name
        let w = z.target.value
        setForm({...form, [y]:w})
    }

    function handleSubmit (event) {
        event.preventDefault()
        fetch('https://localhost:9292/users', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Accepts": "application/json",
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(allUsers => {
            setForm(
                {name: "",
            profile_pic_url: ""}
                )
        })
    }





    
    return (
        <>
            {renderUsers}
            {/* {props.fetchedUsers.map(eachUser => {
                return (
                    
                    <User key={eachUser.id}eachUser={eachUser} />
                    
                )
            })} */}
        </>

    )
}

export default UsersList;