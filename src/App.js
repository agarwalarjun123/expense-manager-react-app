import React, { Component } from "react";
import "./app.css";
import ExpenseHistory from "./components/expenseHistory";
import AddExpense from "./components/addExpense";

export default class App extends Component {
  state = {
    expense: 0,
    income: 1000,
    history: [],
  };
  addExpense = (transaction) => {
    const history = this.state.history;
    const expense = this.state.expense;
    this.setState({
      history: [...history, transaction],
      expense: expense + transaction.expense,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="container">
          <h4>Your Balance</h4>
          <h1 id="balance">Rs. {this.state.income - this.state.expense}</h1>
        </div>
        <div class="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">
              Rs.{this.state.income}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">
              Rs.{this.state.expense}
            </p>
          </div>
        </div>
        <h6>History</h6>
        <ExpenseHistory history={this.state.history} />
        <AddExpense addExpense={this.addExpense} />
      </div>
    );
  }
}
