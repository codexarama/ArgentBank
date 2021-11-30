const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})

// const transactionApi = 'http://localhost:3001/api/v1/transaction'

// const transactions = [
//   {
//     date: 'June 20th, 2020',
//     description: 'Happy birthday',
//     amount: '50.00',
//     balance: '2082.79',
//     type: 'wire transfer',
//     category: 'none',
//     note: ''
//   },
//   {
//     date: 'June 20th, 2020',
//     description: 'Golden Sun Backery',
//     amount: '100.00',
//     balance: '2032.79',
//     type: 'debit card charge',
//     category: 'food',
//     note: ''
//   }
// ]

// transactions.forEach(transaction => {
//   axios
//     .post(transactionApi, transaction)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// })
