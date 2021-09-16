// import User from './Components/User';
// import User from './Components/User';
import UserCard from './Components/User';

import {useState, useEffect} from 'react';

function UserList (props) {


    // const [form, setForm] = useState( {
    //     name: "",
    //     profile_pic_url: ""
    // })

    // // const [userList, setUserList] = useState( [] );

    // // const getFetchUsers = () => {
    // //     fetch('http://localhost:9292/users')
    // //     .then(response => response.json())
    // //     .then(fetchedUsers => {
          
    // //       setUserList(fetchedUsers);
    // //     });
    // //   } 
    // //   useEffect(getFetchUsers, [])


    // function changeForm (z) {
    //     let y = z.target.name
    //     let w = z.target.value
    //     setForm({...form, [y]:w})
    // }

    // // function addUser (someUser) {
    // //     const newUser = [...userList, someUser]

    // //     setUserList(newUser);

    // // }

    // function handleSubmit (event){
    //     event.preventDefault()
    //     fetch('http://localhost:9292/users', {
    //         method: 'POST',
    //         body: JSON.stringify(form),
    //         headers: {
    //             "Accepts": 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then (response=>response.json())
    //     .then(allUsers=> {
    //         addUser(allUsers)
    //         // addUser(allUsers)
    //         setForm ({comment: "", 
    //         name: ""})
    //     })
    // }
    
    // // console.log(props);


    // const renderUsers = props.fetchedUsers.map(eachUser => {

    //     return (
    //         <User key={eachUser.id} eachUser={eachUser} />
    //     )

    // })

    return (
        <div>
            {/* {renderUsers}
            <h3>Create User</h3>
            <form onSubmit={handleSubmit}>
                <textarea rows='3' cols='25'
                    type="text"
                    name="name"
                    className="input"
                    value={form.name}
                    onChange= {changeForm}
                    placeholder='Insert Username'
                    />
                    
                    <br></br>

                    <input
                    type="text"
                    name="Profile pic url"
                    className="input"
                    value={form.profile_pic_url}
                    onChange= {changeForm}
                    placeholder='Insert Profile pic url'
                    />

                    <br></br>

                    <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="button"
                    />

            </form>

             */}

        </div>
    )

}

export default UserList;