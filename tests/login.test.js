import http from 'k6/http';
import { sleep, check } from 'k6';
import {pegarBaseURL} from '../utils/variaveis.js';

const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {

    stages: [
        { duration: '10s', target: 10 },
        { duration: '20', target: 10 },
        { duration: '10s', target: 30 },
        { duration: '20s', target: 30 },
        { duration: '20s', target: 0 },

    ],

    thresholds: {
        http_req_duration: ['p(95)<200'],
        http_req_failed: ['rate<0.01'],

    },
};

export default function () {

    const url = pegarBaseURL() + '/login';

    postLogin.username = "junior.Lima"; // manipulação de dados json de forma pontual
    console.log(postLogin);
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);
    check(res, {

        'Validar que o status é 200': (r) => r.status === 200,
        'validar que o token é string': (r) => typeof (r.json().token) == 'string'

    })


    sleep(1);
}