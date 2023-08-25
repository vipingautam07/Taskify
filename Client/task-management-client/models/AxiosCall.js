import axios from 'axios';
import qs from 'qs';

export default async function axiosCall(method, pathUrl, data) {
    const url = 'http://localhost:8000/' + pathUrl
    const sendData = JSON.stringify(data);
    const res = await axios({
        method: method,
        url: url,
        data: qs.stringify({
            ...sendData
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    });

    console.log(res);

    return res;
}