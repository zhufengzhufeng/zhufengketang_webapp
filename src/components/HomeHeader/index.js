import React,{Component} from 'react';
import './index.less';
import logoImg from '../../common/images/logo.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {
            isShow:false
        }
    }
    changeShow(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render(){
        let {isShow} = this.state;
        return (
            <div className="home-header">
                <div className="header-bar">
                    <img src={logoImg}/>
                    <div onClick={this.changeShow.bind(this)}>
                        {
                            isShow?<i className="iconfont icon-guanbi"></i>:
                                <i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <div className="header-menu">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {isShow?<ul onClick={this.choose.bind(this)}>
                            <li>Node课程培训</li>
                            <li>HTML课程培训</li>
                            <li>视频课程</li>
                            <li>文档课程</li>
                        </ul>:''}
                    </ReactCSSTransitionGroup>
                </div>

            </div>
        )
    }
    choose(e){
        //调用父组件的传递的函数
        this.props.choose(e.target.innerText);
        //关闭下拉菜单
        this.changeShow();
    }
}