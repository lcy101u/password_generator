const express = require('express')
const exhbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

 // 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {password: password, options: options})
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})