import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'editors/all',
  add: 'editors/add',
  update: 'editors',
  getOne: 'editors',
  delete: 'editors',
};

export async function getEditors(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addEditor(params:any) {
  return await post(urls.add, params);
}

export async function updateEditor(params:any, id:number) {
  let url = urls.update + '/' + id;
  return await put(url, params);
}
// todo: Make functional
export async function getEditorById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteEditorById(id:number) {
  return await deleteOne(urls.delete, id);
}
