import api from '../http'

const fetch = api.http

export function getUsercInfo(params) {
    return fetch({
        url: 'http://39.106.116.109:9099//api/sys/processorInfo',
        method: 'get',
        params,
    })
}

export function getUserInfo(params) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/sys/osInfo',
        method: 'get',
        params,
    })
}
export function postUser1Info(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/user/login',
        method: 'post',
        data,
    })
}
export function postUser2Info(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/user/register',
        method: 'post',
        data,
    })
}



export function getImgBase64(src) {
    return new Promise((resolve) => {
        let img = new Image();
        img.crossOrigin = "anonymous"
        img.src = src;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var dataURL = canvas.toDataURL("image/jpeg");
            resolve(dataURL);
        }

    })
}

export function getgjInfo(params) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/conf/threshold',
        method: 'get',
        params,
    })
}
export function postgjInfo(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/conf/setThreshold',
        method: 'post',
        data,
    })
}


export function getyxInfo(params) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/conf/email',
        method: 'get',
        params,
    })
}

export function postxjInfo(data){
    return fetch({
        url: 'http://39.106.116.109:9099/api/conf/saveEmail',
        method: 'post',
        data,
    })
}

export function getscInfo(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/conf/delEmail',
        method: 'post',
        data,
    })
}

export function postrwInfo(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/task/saveTask',
        method: 'post',
        data,
    })
}
export function delrwInfo(data) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/task/delTask',
        method: 'post',
        data,
    })
}
export function getrwInfo(params) {
    return fetch({
        url: 'http://39.106.116.109:9099/api/task/listTask',
        method: 'get',
        params,
    })
}

