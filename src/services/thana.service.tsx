import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'thanas/all',
  add: 'thanas/add',
  getOne: 'thanas',
  delete: 'thanas',
};

export async function getThanas(params:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addThana(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getThanaById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteThanaById(id:number) {
  return await deleteOne(urls.delete, id);
}
