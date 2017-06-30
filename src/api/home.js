//所有的home请求 都存在这里

import {get} from './index';
let url = 'http://localhost:4000';
export function getSliders() {
    return get(url+'/api/getSliders');
}

/*fetch('url',{
    method:'get',
    headers:{
        accept:'application/json'
    }
}).then(res=>res.json()).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})*/
//res.json() 返回的依旧是promise对象