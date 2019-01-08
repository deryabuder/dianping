import {creactStore} from 'redux'

// 定义计算规则
function counter(state=0, action) {
  switch(action.type) {
    case 'INSCEMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
// 根据计算规则生成store
let store = creactStore(counter)

// 订阅事件
store.subscribe(()=>{
  console.log('current state', store.getState())
})

// 触发数据变化(发布)
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})