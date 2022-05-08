const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.url)
    res.write('hello')
    next()
    // res.end()
    // res.send()
})

app.use((req, res, next) => {
    res.write(' world')
    res.end()
})

app.listen(3000, () => {
    console.log('正在监听3000端口')
})