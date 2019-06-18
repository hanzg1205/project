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
export function examadd(params){
    return request({
        url:`/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`,
    })
}
// 获取用户信息
export function userInfo(){
    return request({
        url:'/user/userInfo',
        method:'GET'
    })
}

export function getQuestions(){
    return request({
        url:'/exam/questions/new',
        method:'GET'
    })
}

export function getDetailData(params){
    return request({
        params:{
            questions_id:params
        },
        url:'/exam/questions/condition',
        method:'GET'
    })
}

// 用户数据
export function userShow(){
    return request({
        url:'/user/user',
    })
}
export function getUserId(){
    return request({
        url:'/user/identity',
        method:'GET'
    })
}


// 身份数据
export function userIdentity(){
    return request({
        url:'/user/identity',
        method:'GET'
    })
}
export function getData(){
    return request({
        url:'/user/user',
        method:'GET'
    })
}

export function userAdd(params){
    console.log(params)
    return request({
        data:{
            user_name:params.userName,
            user_pwd:params.userPwd,
            identity_id:params.userId
        },
        url:'/user',
        method:'POST'
    })
}


// api接口权限
export function userApi(){
    return request({
        url:'/user/api_authority',
        method:'GET'
    })
}

// 身份和api权限关系
export function userIdentity_api(){
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

// 视图接口权限
export function userView_authority(){
    return request({
        url:'/user/view_authority',
        method:'GET'
    })
}

// 身份和视图权限关系
export function userIdentity_view(){
    return request({
        url:'/user/identity_view_authority_relation',
        method:'GET'
    })
}

