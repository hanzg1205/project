import request from '../utils/request';

export function getClassData(){
    return request({
        url:'/manger/grade',
        method:'GET'
    })
}

export function getClassNameData(){
    return request({
        url:'/manger/room',
        method:'GET'
    })
}