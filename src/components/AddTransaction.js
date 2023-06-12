import React, { useState } from 'react'

export const AddTransaction = (prop) => {
    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);
    function submit(e) {
        e.preventDefault();
        prop.addTransactionDetails(Math.floor(Math.random() * 10000000), text, +amount)
    }
    return (
        <>
            <h3> Add new transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className="form-control">
                    <label htmlFor='amount'>Amount<br />
                        (negative - expense, postive - income)
                    </label>

                    <input type='number' onChange={e => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn' >Add Transaction</button>
            </form>
        </>
    )
}
