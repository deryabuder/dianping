import React from 'react'
import Header from '../../components/Header/Header'
import DetailInfo from '../../components//DetailInfo/DetailInfo'
import Buy from './subs/buy'
import DetailDes from '../../components/DetailDes/DetailDes'
import Comment from './subs/Comment'
import {detailInfo} from '../../common/js/apiInterface'
import './Detail.css'

class Detail extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        detailInfo: {},
        likeArr: [],
        isMore: false,
      }
    }
    componentDidMount() {
      detailInfo().then(response => {
        var res = response.data
        if (res.status === '200') {
          this.setState({
            detailInfo: res.result
          })
        }
      })
    }

  render() {
    const id = this.props.match.params.id
    return (
      <div className='detail'>
        <Header title='商户详情'></Header>
        <DetailInfo detailInfo={this.state.detailInfo}></DetailInfo>
        <Buy id={id} history={this.props.history}></Buy>
        <DetailDes detailInfo={this.state.detailInfo}></DetailDes>
        <Comment></Comment>
        {/* <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/> */}
      </div>
    )
  }
}

export default Detail