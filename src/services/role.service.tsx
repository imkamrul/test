import { deleteOne, getAll, getOne, patch, post } from './api';

const urls = {
  getAll: 'role/all',
  addRole: 'role/add',
  updateRole:'role',
  getOne: 'role',
  delete: 'role'
};

export async function getRoles() {
  return getAll(urls.getAll, {});
}

export async function addRole(params:any) {
  return await post(urls.addRole, params);
}

export async function updateRole(params:any, id:number) {
  let url = urls.updateRole+"/"+id;
  return await patch(url, params);
}

export async function getRoleById(id:number) {
  return await getOne(urls.getOne, id);
}

export async function deleteById(id:number) {
  return await deleteOne(urls.getOne, id);
}
