// 自己封装带有报错信息的localStorage
export default {
  getItem: function (key) {
    let value
    try {
      value = localStorage.getItem(key)
    } catch (ex) {
      console.error('localStorage.getItem报错, ', ex.message)
    } finally {
      return value
    }
  },
  setItem: function (key, value) {
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      localStorage.setItem(key, value)
    } catch (ex) {
      console.error('localStorage.setItem报错, ', ex.message)
    }
  }
}