const express = require('express')
const articleRouter = require('./router/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Articles',
        createdAt: Date.now(),
        description: 'Test description'
    }]
    res.render('index', { articles: articles })
})

app.listen(5000)