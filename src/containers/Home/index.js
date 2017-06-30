import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';//组件链接redux
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader/>
            </div>
        )
    }
}
export default connect(
    (state)=>({
        router:state.router// 将状态中的router映射成router属性
    })
    //mapStateToProps  获取状态的，把所有的状态映射成属性
    //mapDispatchToProps 把所有的action映射成属性
)(Home)