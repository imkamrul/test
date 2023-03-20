import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'groups/all',
  addGroup: 'groups/add',
  updateGroup: 'groups',
  getOne: 'groups',
  delete: 'groups',
};

export async function getGroups(params:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addGroup(group:any) {
  return await post(urls.addGroup, group);
}

// todo: Make functional
export async function updateGroup(group:any, id:number) {
  let url = urls.updateGroup + '/' + id;
  return await put(url, group);
}
// todo: Make functional
export async function getGroupById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteGroupById(id:number) {
  return await deleteOne(urls.delete, id);
}
