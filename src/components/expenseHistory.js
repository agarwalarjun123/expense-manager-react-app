import React from "react";
import _ from "lodash";

function expenseHistory({ history }) {
  const historyList = _.map(history, ({ title, expense,color }) => {
    return (
      <div className="history-row card">
        <span className="left">{title}</span>
        <span className={"right "+color+'-text'}>Rs.{expense}</span> 
      </div>
    );
  });
  return <div className="container expense-history">{historyList}</div>;
}
export default expenseHistory