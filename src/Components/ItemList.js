import Item from "./Item";

function ItemList (props) {

    const renderItems = props.fetchedItems.map(eachItem => {

        return (
            <Item key={eachItem.id} eachItem={eachItem} />
        )

    })
    return (
        <div>
            {renderItems}

        </div>
    )
}


export default ItemList;