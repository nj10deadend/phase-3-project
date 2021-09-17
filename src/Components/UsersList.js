import User from "./User";
import {useState, useEffect} from 'react';

function UsersList (props) {
    const deleterFunc = props.deleteUserFunction
    const [form, setForm] = useState( {
        name: "",
        profile_pic_url: ""
    } );
    const [userState, setUserState] = useState( [] );
    function mockFetchForUsers () {
        setUserState(props.fetchedUsers)
    }
    const renderUsers = props.fetchedUsers.map(eachUser => {
        return (
           <User key={eachUser.id} eachUser={eachUser} deleteFunction={deleterFunc} />
       )
    })
    function changeForm(z) {
        let y = z.target.name
        let w = z.target.value
        setForm({...form, [y]:w})
    }

    function addUser(someUser) {
        const newUser = [someUser, ...props.fetchedUsers] 
            setUserState(newUser)
    }

    function handleSubmit (event) {
        // console.log(form)
        event.preventDefault()
        fetch('http://localhost:9292/users', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Accepts": "application/json",
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(allUsers => {
            addUser(allUsers)
            setForm(
                {name: "",
            profile_pic_url: ""}
                )
        })
    }
    return (
        <div className='scroll'>
            {renderUsers}
            <h2 className='tile' id='roll'>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.name} onChange={changeForm} className="input" name="name" placeholder="Insert Username" />
               <br></br>
                <input type="text" value={form.profile_pic_url} onChange={changeForm} className="input"name="profile_pic_url" placeholder="Insert URL"></input>
                <br></br>
                <input type="submit" name="submit" value="SUBMIT" className="buy"></input>
            </form>
            <br></br>
                       Create New User
            </h2>
            
        </div>
    )
}
export default UsersList;