function User ({eachUser}) {

    // console.log(eachUser);
    return (
        <div>

            <img className="picture" src={eachUser.profile_pic_url} alt={eachUser.name} />
            <h2>{eachUser.name}</h2>
        </div>
    )

}


export default User;