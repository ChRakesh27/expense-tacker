

export const History = (prop) => {
    return (<>
        <h3>History</h3>
        <ul className='list'>
            {prop.transactionList.map(item =>
                <li key={item.id} className={item.amount > 0 ? 'plus' : 'minus'}>
                    {item.text} <span>{item.amount > 0 ? '+' : '-'}${Math.abs(item.amount)}</span>
                    <button className='delete-btn' onClick={() => prop.deleteTransaction(item.id)}>X</button>
                </li>
            )
            }
        </ul>
    </>
    )
}
