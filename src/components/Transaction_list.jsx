import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const Transaction_list = () => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(
            <Transaction key={transaction.id} transaction={transaction}/>
        ))}
         {/* <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>  */}
      </ul>
    </div>
  )
}

export default Transaction_list
