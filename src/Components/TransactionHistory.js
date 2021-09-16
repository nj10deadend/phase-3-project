import Transaction from './Components/Transaction';


function TransactionHistory (props) {


    const renderTransactions = props.fetchedTransactions.map(eachTransaction => {
        return (
            <Transaction key={eachTransaction.id} eachTransaction={eachTransaction}/>
        )
    })

    return (

    <div>
        {renderTransactions}
        
    </div>

    )


}

export default TransactionHistory;