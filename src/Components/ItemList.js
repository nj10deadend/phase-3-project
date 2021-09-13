import Item from "./Item";

function ItemList (props) {

    const renderItems = props.fetchedGroceries.map(eachItem => {

        return (
            <Item eachItem={eachItem} />
        )

    })
    return (
        <div>
            {renderItems}

        </div>
    )
}


export default ItemList;