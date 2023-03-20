import { deleteOne, getAll, getOne, patch, post } from './api';

const urls = {
  getAll: 'user/all',
  addUser: 'user/add',
  updateUser:'user',
  getOne: 'user',
  delete: 'user'
};

export async function getUsers(params:any) {
  return getAll(urls.getAll, params);
}

export async function addUser(params:any) {
  return await post(urls.addUser, params);
}

export async function updateUser(params:any, id:number) {
  let url = urls.updateUser+"/"+id;
  return await patch(url, params);
}

export async function getUserById(id:number) {
  return await getOne(urls.getOne, id);
}

export async function deleteById(id:number) {
  return await deleteOne(urls.getOne, id);
}
