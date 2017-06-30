//这个组件 主要是显示所有页面用的
import React,{Component} from 'react';
import Tab from "../components/Tab/index";
export default class App extends Component{
    render(){
        return (
            <div className="wrap">
                {this.props.children}
                <Tab/>
            </div>
        )
    }
}