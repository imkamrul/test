import { Interface } from "readline";
import { post } from "./api";
import { jsonDecript, jsonEncript } from "@/utils";
const urls = {
  register: "auth/register",
  login: "auth/login",
};
let tokenRenewalTimeout: number;

interface IRegister {
  first_name: String;
  last_name: String;
  password: String;
  provider?: String;
  password_confirmation: String;
  email: String;
  referral_code?: String;
}

interface ILogin {
  email: String;
  password: String;
}

export async function authenticate(body: ILogin) {
  const url = urls.login;
  return post(url, body);
}

export async function registration(body: IRegister) {
  const url = urls.register;
  return post(url, body);
}

export function userLogout(auto = false) {
  clearLocalStorage();
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function setToken(token: string) {
  return localStorage.setItem("token", token);
}

export function setUseInfo(user: any) {
  return localStorage.setItem("user", jsonEncript(user));
}

export async function getUserInfo() {
  return jsonDecript(localStorage.getItem("user"));
}

export function getToken() {
  return localStorage.getItem("token");
}
