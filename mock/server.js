var express = require('express')
var router = express.Router()
var app = express()
// 首页 超值特惠
const homeAdData = require('./home/ad')
router.get('/api/homead', (req, res, next) => {
  res.json({
    status: '200',
    message: '',
    result: homeAdData
  })
})

// 首页 猜你喜欢
const homeListData = require('./home/list')
router.get('/api/likelist', (req, res, next) => {
  // const params = req.params
  // const city = params.city
  // const page = params.page
  res.json({
    status: '200',
    message: '',
    result: homeListData
  })
})

//详情页面
const detailData = require('./detail/info')
router.get('/api/detail/info',(req, res,next) => {
    //获取参数
  // const params = req.params
  // const id = params.id
  res.json({
    status: '200',
    message: '',
    result: detailData
    })
})
//详情页面 --评价列表
const commentData = require('./detail/comment')
router.get('/api/detail/comment', (req, res, next) => {
  // const params = req.params
  // const id = params.id
  res.json({
    status: '200',
    message: '',
    result: commentData
  })
})
//User界面中 订单列表
const orderList = require('./orderlist/orderlist')
router.get('/api/user/orderlist',(req, res,next) => {
  res.json({
    status: '200',
    message: '',
    result: orderList
  })
})
// 搜索列表
const searchList = require('./search/list.js')
router.get('/api/search/list', (req, res, next) => {
  res.json({
    status: '200', 
    message: '', 
    result: searchList
  })
})
// 提交评论
router.post('/api/submitComment', (req, res, next) => {
  res.json({
    status: '200', 
    message: '', 
    result: ''
  })
})

// 开始服务并生产路由
app.use(express.json())
app.use('/', router)
app.listen(3001)
console.log("app run at http://localhost:3001")
