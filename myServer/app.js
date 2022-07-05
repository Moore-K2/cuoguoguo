//1、引入express
const express = require('express');
const bodyParser = require('body-parser');
//2、创建服务器对象
const app = express();
//4、处理get请求
app.get('/data', (req, res) => {
    //设置请求头 解决跨域问题
    //res.setHeader("Access-Control-Allow-Origin","*");
    //模拟数据到http://jsonplaceholder.typicode.com/todos获取
    res.json({
        todos: [{
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            },
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
            },
            {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false
            }
        ]
    })
})

//5、post请求
app.post('/user', (req, res) => {
    res.json({
        //前端传什么数据 后台就传什么数据给你
        user: req.body,
        msg: 'post请求成功'
    })
    console.log("接收", req.body)
})

//3、开启监听
app.listen(4000, (error) => {
    if (!error) console.log('4000===>服务器已开启');
})