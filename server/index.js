let express = require('express')
let firebase = require('firebase/app')
require('firebase/database')
let app = express()

app.set('default engine', 'pug')

app.get('/', (req, res) => {
  return res.render('index.pug')
})

app.post('/', (req, res) => {
  console.log(req)
})

const config = {
  apiKey: process.env.F_API_KEY,
  authDomain: process.env.F_AUTH_DOMAIN,
  databaseURL: process.env.F_DATABASE_URL,
  storageBucket: process.env.F_STORAGE_BUCKET
}

firebase.initializeApp(config)
let database = firebase.database()
let customersRef = database.ref('customers/')
// let newCustomerRef = customersRef.push()

// let priyaDetails = {
//   firstName: 'Priya',
//   lastName: 'Christopher',
//   paymentDateline: `${new Date('11 09 2018')}`,
//   email: 'priya.satishc@gmail.com'
// }

// newCustomerRef.set(priyaDetails, function(err) {
//   err ? console.log(err) : console.log('added details: ', priyaDetails)
// })

app.listen('3000', (err) => console.log('listening on port 3000', err))