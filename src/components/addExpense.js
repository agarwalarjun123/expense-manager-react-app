import React, { Component } from "react";

export default class Expense extends Component {
  state = {
    expenseName: "",
    value: 0,
  };
  handleInputChange = (e)  => {
    console.log(e.target.id);
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) =>{
      e.preventDefault()
      this.props.addExpense({
          title: this.state.expenseName,
          expense: parseInt(this.state.value),
          color: 'red'   
      })
  }
  render() {
    return (
      <div class="add-transaction">
        <h6>Add Transaction</h6>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="expenseName">
            Add Expense Name
            <input
              type="text"
              id="expenseName"
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="expenseValue">
            Add Expense Value
            <input type="text" id="value" onChange={this.handleInputChange} />
          </label>
          <button className="center btn">Add Expense</button>
        </form>
      </div>
    );
  }
}
