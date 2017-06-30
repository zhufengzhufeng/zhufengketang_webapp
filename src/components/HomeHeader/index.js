import React,{Component} from 'react';
import './index.less';
import logoImg from '../../common/images/logo.png';
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header">
                <div className="header-bar">
                    <img src={logoImg}/>
                    <div>
                        <i className="iconfont icon-uilist"></i>
                    </div>
                </div>
            </div>
        )
    }
}