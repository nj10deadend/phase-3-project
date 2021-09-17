function Item ({eachItem}) {
    return (
        <div className='tile' id='item'> 
            <img className="picture" src={eachItem.image_url} alt={eachItem.name} />
            <h4 className='fonti'>{eachItem.name}</h4>
            <h5 className='fonti'>Category: {eachItem.category}</h5>
            <h4 className='fonti'>$ {eachItem.price}</h4>
            <button className='buy'>Buy</button>
        </div>
    )
}
export default Item;