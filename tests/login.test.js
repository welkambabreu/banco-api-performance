import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {

    iterations: 50,

    thresholds: {
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%

    },
};

export default function () {

    const url = 'http://localhost:3000/login';

    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

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