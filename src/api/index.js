import api from '../http'

const fetch = api.http

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

export function get() {
    return fetch({
        url: '/api/networkCard',
        method: 'get',
    })
}
export function getClock() {
    return fetch({
        url: '/api/sys/osInfo',
        method: 'get',
    })
}
export function getpre() {
    return fetch({
        url: '/api/sys/osInfo',
        method: 'get',
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



