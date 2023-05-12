import axios from "axios";
import { getToken } from "@/helpers/cookie";

const API_URL = "https://backend-evalution.fundednext.com/api/v1";

const caxios = axios.create({
  baseURL: API_URL,
  timeout: 200000,
  headers: {
    // Authorization: 'Bearer ' + getToken(),
    //Authorization: 'Bearer ',
    "Content-Type": "application/json",
  },
  // transformRequest: [
  //     (data) => {
  //         return data;
  //     },
  // ],
  // validateStatus: (status): any => {
  //     if (status < 300 || status === 400 || status === 422) {
  //         return status;
  //     }
  //     return true;
  // },
});

const openAxios = axios.create({
  baseURL: API_URL,
  timeout: 200000,
  headers: {
    // Authorization: API_URL,
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data) => {
      return data;
    },
  ],
});
caxios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (err) => {
    console.log(err);
  }
);
// caxios.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// setInterval( function() { getRefreshToken() }, 2300000);

// export function getRefreshToken() {
//   if(getAuthentication()) {
//   let refreshTokenInfo = StorageService.getRefreshToken();
//   const requestBody = {
//     refreshToken: refreshTokenInfo['refresh_token']};
//   const config = {
//     headers: {
//       Authorization: LOGIN_TOKEN,
//       "Content-Type": "application/json"
//     }
//   };
//   let _url = API_OPEN_URL+"refresh";
//   axios.put(_url, requestBody, config).then(function(resp) {
//     if(resp && resp.status == 200) {

//       let token = resp.data.access_token;
//       let _rTokenInfo = {
//         refresh_token: resp.data.refresh_token,
//         expires_in:resp.data.expires_in
//       }
//       delete axios.defaults.headers.common["Authorization"];
//       axios.defaults.headers.common['Content-Type'] = 'application/json';
//       axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
//       StorageService.saveRefreshToken(_rTokenInfo);
//       StorageService.saveToken(token);
//     }
//   })
// }
// }
export const http = caxios;
export const openHttp = openAxios;

export default {
  http,
  openHttp,
};
