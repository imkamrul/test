import { post } from './api';
import {jsonDecript, jsonEncript} from "@/utils";
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

