import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "./context/GlobalState";
import {v4 as uuid} from "uuid";

const AddTransactin = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const{addTransaction}=useContext(GlobalContext);
  const unique_id = uuid();
  const new_id = unique_id.slice(0,8)

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const newTransaction={
        id:new_id,
        text,
        amount:+amount
        
    }

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form
       onSubmit={onSubmitHandler}
       >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive - income)
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactin;
