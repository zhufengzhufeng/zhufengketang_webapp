import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
    return fetch(url,{
        headers:{
            accept:'application/json',
        }
    }).then(res=>res.json())
}
export function post() {
    
}