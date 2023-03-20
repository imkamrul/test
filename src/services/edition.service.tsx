import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'editions/all',
  add: 'editions/add',
  getOne: 'editions',
  delete: 'editions'
};

export async function getEditors(params:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addEdition(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getEditionById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteEditionById(id:number) {
  return await deleteOne(urls.delete, id);
}
