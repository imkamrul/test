import { deleteOne } from './api';

const urls = {
  getAll: 'user/all',
  addUser: 'user/add',
  getOne: 'user',
  delete: 'user'
};

// export async function getUsers(params) {
//   return getAll(urls.getAll, params);
// }

// export async function addUser(user) {
//   return await post(urls.addUser, user);
// }

// export async function getUserById(id) {
//   return await getOne(urls.getOne, id);
// }

export async function deleteById(url:string, id:number) {
  return await deleteOne(url, id);
}

