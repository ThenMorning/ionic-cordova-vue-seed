require('es6-promise').polyfill();
import Vue from "vue";
import axios from "axios";

axios.defaults.responseType = 'json';

//请求参数转化(处理%+等特殊字符)
axios.defaults.transformRequest = function (data) {
    if (data) {
        if (data instanceof FormData) {
            return data;
        } else {
            //解决%,+编码问题
            if (data instanceof Object) {
                data = JSON.stringify(data);
                data = data.replace(/\%/g, encodeURIComponent("%"));
                data = data.replace(/\+/g, encodeURIComponent("+"));
                return data;
            }
        }
    }
};


export default {
    post(data, serverUrl) {
        let url = serverUrl;
        return axios({
            method: 'post',
            url: url,
            data: data,
            timeout: 20000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    },
    get(params, serverUrl) {
        let url = serverUrl;
        return axios({
            method: 'get',
            url: url,
            params,
            timeout: 20000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
    },
    postFormData(url, formData){
        let config = {
            headers: {'Content-Type': 'multipart/form-data'}
        }
        return axios.post(url, formData, config);
    }
}

