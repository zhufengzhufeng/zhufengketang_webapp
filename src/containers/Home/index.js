import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import {connect} from 'react-redux';//组件链接redux
import * as action from '../../redux/actions/home';
import {bindActionCreators} from 'redux'
import Slider from "../../components/Slider/index";
import LessonList from "../../components/LessonList/index";
//{setCurrentLesson:fn}
/*@connect(state=>({}),dispatch=>{
    return bindActionCreators(action,dispatch)
})*/
@connect(state=>({
    sliders:state.home.sliders,//将轮播图中的数据 映射到sliders身上
    lessons:state.home.lessons
}),action)
export default class Home extends Component{
    componentWillMount(){
        this.props.getSlider();
        this.props.getLesson();
    }
    choose(val){ //homeHeader点击后的城市
        console.log(val); //想改变redux中的值 就要发布action
        this.props.setCurrentLesson(val);
    }
    loadMore(){
        this.props.getLesson();
    }
    render(){
        //当我们直接调用属性中的setCurrentLesson方法 会自动dispatch
        return (
            <div style={{height:'100%'}}>
                {/*子组件和父组件通信，父组件传递回调函数给子组件 子组件触发这个函数*/}
                <HomeHeader choose={this.choose.bind(this)}/>
                <div className="page-wrap">
                    <Slider sliders={this.props.sliders}/>
                    <LessonList lists={this.props.lessons.list}/>
                    <button onClick={this.loadMore.bind(this)}>获取更多</button>

                </div>
            </div>
        )
    }
}
//我们要 传入一个函数 给HomeHeader,当点击某个列表时 拿到数据
/*
export default connect(
    (state)=>({
        router:state.router// 将状态中的router映射成router属性
    })
    //mapStateToProps  获取状态的，把所有的状态映射成属性
    //mapDispatchToProps 把所有的action映射成属性
)(Home)*/
