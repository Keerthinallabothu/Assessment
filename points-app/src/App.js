import React, { useState, useEffect } from "react";
import fetch from "./mock/getMockData";
import ReactTable from "react-table";
import "./App.css";
import "react-table/react-table.css";
import { calculateResults } from "./getResults/getResults";
import { columns, totalsByColumns } from "./helpers/constants";

function App() {
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    fetch().then((data) => {
      const results = calculateResults(data);
      setTransactionData(results);
    });
  }, []);

  function getTransaction(row) {
    let res = transactionData.pointsPerTransaction.filter((tableRow) => {
      return (
        row.original.custid === tableRow.custid &&
        row.original.monthNumber === tableRow.month
      );
    });
    return res;
  }

  if (transactionData == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <b> Reward points by  Months</b>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ReactTable
              data={transactionData.summaryByCustomer}
              defaultPageSize={5}
              columns={columns}
              className='-highlight -striped'
              SubComponent={(row) => {
                return (
                  <div>
                    {getTransaction(row).map((tran) => {
                      return (
                        <div className="container">
                          <div className="row">
                            <div className="col-8">
                              <strong>Transaction Date:</strong>{" "}
                              {tran.transactionDt} - <strong>$</strong>
                              {tran.amt} - <strong>Points: </strong>
                              {tran.points}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            <b> Rewards points by customer</b>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ReactTable
              data={transactionData.totalPointsByCustomer}
              columns={totalsByColumns}
              defaultPageSize={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
