function Item ({eachItem}) {
    return (
        <div>
            <img className="picture" src={eachItem.image_url} alt={eachItem.name} />

            <h4>{eachItem.name}</h4>
            <h4>Category: {eachItem.category}</h4>
            <h4>$ {eachItem.price}</h4>

            <button>Buy</button>

        </div>
    )
}

export default Item;