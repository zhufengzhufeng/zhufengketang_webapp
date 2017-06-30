import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
export default class Tab extends Component {
    render() {
        let path = this.props.path;
        return (
            <nav className="tab">
                <Link to={'/home'} className={'/home'===path?'active':''}>
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </Link>
                <Link to={'/lesson'} className={'/lesson'===path?'active':''}>
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </Link>
                <Link to={'/profile'} className={'/profile'===path?'active':''}>
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </Link>
            </nav>
        )
    }
}