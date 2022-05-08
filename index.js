const express = require('express')
const { setEncoding } = require('./middleware/encoding')
const { setPrefix } = require('./middleware/prefix')
const app = express()

// 设置编码中间件
app.use(setEncoding('utf-8'))

// 添加prefix中间件
app.use(setPrefix('[RNG] '))

app.use((req, res, next) => {
    if(req.url === '/' && req.method === 'GET') {
        res.write('hello /')
        res.end()
    } else {
        res.write('hello') // 其中write是流的方式。
        next()
    }
    // res.end()
    // res.send()
})

app.use((req, res, next) => {
    if(req.url === '/hello' && req.method === 'GET') {
        res.write(' world') // 其中write是流的方式。
        res.end()
    } else {
        next()
    }
})

app.use((req, res, next) => {
    res.write('404 错误页面!')
    res.end()
})


app.listen(3000, () => {
    console.log('正在监听3000端口')
})