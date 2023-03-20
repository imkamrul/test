import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'languages/all',
  add: 'languages/add',
  getOne: 'languages',
  delete: 'languages'
};

export async function getLanguages(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addLanguage(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getLanguageById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteLanguageById(id:number) {
  return await deleteOne(urls.delete, id);
}
