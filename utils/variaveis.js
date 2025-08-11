const configLocal = JSON.parse(open('../config/config.local.json'));

export function pegarBaseURL() {

    return  __ENV.BASE_URL || configLocal.baseUrl;
   
    /*const base_URL = __ENV.BASE_URL || 'http://localhost:3000'
    return base_URL*/

}