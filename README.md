（1）初始化react项目：
npm install -g create-react-app
create-react-app dianping

（2）初始化后端：
没有使用express-generator
npm install express

server.js内容：
  var express = require('express')
  var router = express.Router()
  var app = express()
  router.get('/', (req, res, next) => {})
  app.use('/', router)
  app.listen(3001)

（3）启动项目：
前端: cd 到项目目录，执行npm start
后端: cd 到mock目录，执行node server.js