import { post } from './api';
const urls = {
  getAll: 'user/all',
  addUser: 'user/add',
  login: 'auth/login',
};
let tokenRenewalTimeout: number;

export async function authenticate(email: string, password: string) {
  
  email = email.toLowerCase();
  const url = urls.login;

  const body = {
    username: email,
    password: password,
    grantType: 'password',
  };

  return post(url, body);
}

export function userLogout(auto = false) {
  clearLocalStorage();
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function setToken(token:string){
  return localStorage.setItem('token',token);
}

export function setUseInfo(user: any){
  return localStorage.setItem('user',jsonEncript(user));
}

export async function getUserInfo(){
  return jsonDecript(localStorage.getItem('user'));
}

export function getToken(){
  return localStorage.getItem('token');
}

export function strEncript(data: string) {
  return btoa(data);
}

export function strDecript(data: string) {
  return atob(data);
}
export function jsonEncript(data: any | any[]) {
  return btoa(JSON.stringify(data));
}

export function jsonDecript(data: any | any[]) {
  return JSON.parse(atob(data));
}
