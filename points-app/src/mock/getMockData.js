

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Kevin",
          amt: 120,
          transactionDt: "05-01-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Dan",
          amt: 94,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Jack",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 1,
          name: "bill",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 1,
          transactionDt: "07-04-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 80,
          transactionDt: "07-03-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 2,
          name: "hall",
          amt: 125,
          transactionDt: "05-01-2020"
        },
        {
          custid: 2,
          name: "kelly",
          amt: 75,
          transactionDt: "05-21-2020"
        },
        {
          custid: 2,
          name: "Dan",
          amt: 10,
          transactionDt: "06-01-2020"
        },
        {
          custid: 2,
          name: "Dan",
          amt: 75,
          transactionDt: "06-21-2020"
        },
        {
          custid: 2,
          name: "Dan",
          amt: 200,
          transactionDt: "07-01-2020"
        },
        {
          custid: 2,
          name: "Dan",
          amt: 224,
          transactionDt: "07-21-2020"
        },
        {
          custid: 3,
          name: "Anvesh",
          amt: 120,
          transactionDt: "06-21-2020"
        }
    ]
  );
};