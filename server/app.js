const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

const productRouter = require('./routes/product')

app.use('/product', productRouter)


app.listen(port, () => {
    console.log(`listening live and well to ${port}`)
})