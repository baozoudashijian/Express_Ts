const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(req.url)
    res.write('hi')
    res.end()
    // res.end()
    // res.send()
})

app.listen(3000, () => {
    console.log('正在监听3000端口')
})