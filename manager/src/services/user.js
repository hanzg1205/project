import request from '../utils/request';

export function login(params){
    // console.log('params....',params)
    return request({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}

export function exam(params){
    return request({
        data:params,
        url:'/exam/getQuestionsType',
        method:'GET'
    })
}
// 获取用户信息
export function userInfo(params){
    return request({
        url:'/user/userInfo',
        method:'GET'
    })
}
