const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Health is ok",
        statusCode: 200
    })
})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})
