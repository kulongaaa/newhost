import api from '../http'

const fetch = api.http


export function getCard () {
    return fetch({
        url: 'http://39.106.116.109:9095/api/sys/networkCard',
        method: 'get',
    })
}
// export function getPack() {
//     return fetch({
//         url:'http://rap2api.taobao.org/app/mock/287771/api/package/getParsePcap',
//         method:'get'
//     })
// // }
// export function getEnd() {
//     return fetch({
//         url:'http://rap2api.taobao.org/app/mock/287771/api/package/getParsePcap',
//         method:'get',
//     })
// }
export function getPre() {
    return fetch({
        url:'http://39.106.116.109:9095/api/sys/osInfo',
        method:'get',
    })
}
export function getTxt() {
    return fetch({
        url:'http://39.106.116.109:9095/file/queryAll',
        method:'get',
    })
}
export function getName() {
    return fetch({
        url:'http://39.106.116.109:9095/api/package/getPcaplist',
        method:'get',
    })
}

export function getStart() {
    return fetch({
        url:'http://39.106.116.109:9095/api/package/startSniff',
        method:'get',
    })
}
export function getClock() {
    return fetch({
        url:'/api/sys/osInfo',
        method:'get',
    })
}