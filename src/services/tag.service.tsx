import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'tag/all',
  add: 'tag/add',
  getOne: 'tag',
  delete: 'tag'
};

export async function getTags(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addTag(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getTagById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteTagById(id:number) {
  return await deleteOne(urls.delete, id);
}
