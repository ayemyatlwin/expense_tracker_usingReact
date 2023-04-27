import React from 'react'
import "./App.css"
import Header_component from './components/Header_component'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import Transaction_list from './components/Transaction_list'
import AddTransactin from './AddTransactin'

const App = () => {
  return (
    <div>
      <Header_component/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transaction_list/>
        <AddTransactin/>
      </div>
    </div>
  )
}

export default App
