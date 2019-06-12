import request from '../utils/request';

export function login(params){
    // console.log('params....',params)
    return request({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}

export function type(params){
    return request({
        data:params,
        url:'/exam/insertQuestionsType',
        method:'GET'
    })
}