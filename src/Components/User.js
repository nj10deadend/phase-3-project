function User ({eachUser, deleteFunction}) {
    function deleter (synthEvent) {
        deleteFunction(eachUser);
    }
    return (
        <div className='tile' id='scroll'>
            <img className="picture" src={eachUser.profile_pic_url} alt={eachUser.name} />
            <h2 className='name'>{eachUser.name}</h2>
            <button className='buy' onClick={deleter}> DELETE USER </button>
        </div>
    )
}
export default User;