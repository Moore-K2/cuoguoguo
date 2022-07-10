import axios from "axios";

const instance = axios.create({
    baseURL: "", // baseURL会在发送请求时拼接在url参数前面
    timeout: 5000
})

// 请求拦截
// 我们可以在它里面为请求添加一些自定义的内容
instance.interceptors.request.use(
    function(config) {
        console.group("全局请求拦截")
        console.log(config)
        console.groupEnd()
        return config
    },
    function(err) {
        return Promise.reject(err)
    }
)

// 响应拦截
instance.interceptors.response.use(
    function(response) {
        console.group("全局响应拦截")
        console.log(response);
        console.groupEnd()
        return response
    },
    function(err) {
        return Promise.reject(err)
    }
)


// get post请求
export function get(url, params) {
    return instance.get(url, {
        params
    })
}

export function post(url, data) {
    return instance.post(url, data)
}

export function del(url) {
    return instance.delete(url)
}

export function put(url, data) {
    return instance.put(url, data)
}