//这个组件 主要是显示所有页面用的
import React,{Component} from 'react';
export default class App extends Component{
    render(){
        return (
            <div>
                {this.props.children}
                导航
            </div>
        )
    }
}