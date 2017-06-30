import React,{Component} from 'react';
import './index.less'
export default class LessonList extends Component{
    render(){
       /* */
        return (
            <ul className="lesson-list">
                {this.props.lists.length>0?
                    this.props.lists.map((item,index)=>{
                        let {url,lesson,price} = item;
                        return (
                            <li>
                                <img src={url} alt=""/>
                                <p>{lesson}</p>
                                <span>{price}</span>
                            </li>
                        )
                    })
                    :'正在加载'}
            </ul>
        )
    }
}