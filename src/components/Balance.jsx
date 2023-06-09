import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((pv, item) => (pv += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={total>0 ? "total_plus":"total_minus" }>${total}</h1>
    </>
  );
};

export default Balance;
