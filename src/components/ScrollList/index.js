import React,{Component} from 'react';
export default class ScrollList extends Component{
    constructor(){
        super();
        this.state = {isBindEvent:false}
    }
    bindScroll(e){
        //节流
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            let {scrollTop,scrollHeight,offsetHeight} = e.target;
            let {loading,hasMore,loadMore} = this.props;
            if((scrollTop+offsetHeight+20>scrollHeight)&&!loading&&hasMore){
                loadMore();
            }
        },20)
    }
    componentWillReceiveProps(nextProps){

        //当父组件dom 已经生成后 子组件可以接收到新的属性 element,可以给element绑定事件了
        if(nextProps.element&&!this.state.isBindEvent){
            nextProps.element.addEventListener('scroll',this.bindScroll.bind(this),false);
            this.setState({
                isBindEvent:true
            });
        }
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}