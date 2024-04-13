import axios from 'axios'
import EventBus from './event'
// 可以写中间件
const instance = axios.create({
    // 特别重要
    validateStatus: function (status) {
        return status < 500; // 处理状态码小于500的情况
    }
});

instance.interceptors.response.use(function (response) {

    console.log('response.status @@@', response)

    if (response.status === 200) {
        if (response.data.code === 401) {
            // 跳转到登录页
            // 不建议在中间件中处理具体的业务逻辑  发布到组件中去处理
            EventBus.emit('global_not_login', response.data.msg)
        }

        // if (response.data.code === -1) {
        //     EventBus.emit('global_error_tips', response.data.msg)
        // }
    } else if (response.status === 403) {
        // EventBus.emit('global_error_auth', '没有权限，别瞎访问')
    }


    return response;
}, function (error) {
    // EventBus.emit('global_error_tips', error.response.data.message)
    // return Promise.reject(error);

});

export default instance