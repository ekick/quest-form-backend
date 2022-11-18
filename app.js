import express from 'express'
import apiRouter from './routes/api.js'
import connection from './connection.js'
import dotenv from 'dotenv'

const env = dotenv.config().parsed

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
app.use('/', apiRouter)

// catch 404 and error handler
app.use((req,res) => {
    res.status(404).json({ message: '404 NOT FOUND!'})
})

// mongodb connection
connection()

try {
    app.listen(env.APP_PORT, () => {
        console.log(`Server start on ${env.APP_PORT}`)
    })
} catch (error) {
    console.log(error)
}