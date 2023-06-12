import React from 'react'

export const Balance = (prop) => {
    const amount = prop.transactionList.map(transaction => transaction.amount)
    console.log("🚀 ~ amount:", amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>
                YOUR BALANCE
            </h4>
            <h1>${total}</h1>
        </div>

    )
}
