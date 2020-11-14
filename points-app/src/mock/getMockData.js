

export default function() {
  // simulates data coming from a database.
  return Promise.resolve(
    [
        {
          custid: 1,
          name: "Kevin",
          amt: 140,
          transactionDt: "05-01-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 56,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Dan",
          amt: 86,
          transactionDt: "05-21-2020"
        },
        {
          custid: 1,
          name: "Jack",
          amt: 14,
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
          amt: 250,
          transactionDt: "07-01-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 6,
          transactionDt: "07-04-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 90,
          transactionDt: "07-03-2020"
        },
        {
          custid: 1,
          name: "John",
          amt: 280,
          transactionDt: "07-21-2020"
        },
        {
          custid: 2,
          name: "hall",
          amt: 115,
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
          amt: 100,
          transactionDt: "07-01-2020"
        },
        {
          custid: 2,
          name: "Dan",
          amt: 235,
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
