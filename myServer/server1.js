const express = require('express')
const app = express()

app.use((request, response, next) => {
    console.log('有人请求服务器1了');
    // console.log('请求来自于',request.get('Host'));
    // console.log('请求的地址',request.url);
    next()
})

app.get('/images', (request, response) => {
    const images = [{
            "id": "1",
            "image": "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"
        },
        {
            "id": "2",
            "image": "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

        },
        {
            "id": "3",
            "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        },
        {
            "id": "4",
            "image": "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"

        },
        {
            "id": "5",
            "image": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"

        }

    ]
    response.send(images)
})

app.listen(5000, (err) => {
    if (!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/images');
})