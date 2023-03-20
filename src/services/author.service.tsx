import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'authors/all',
  add: 'authors/add',
  update: 'authors',
  getOne: 'authors',
  delete: 'authors',
};

export async function getAuthors(params?:any) {
  return getAll(urls.getAll, params);
}

export async function addAuthor(params:any) {
  return await post(urls.add, params);
}

export async function updateAuthor(params:any, id:number) {
  let url = urls.update + '/' + id;
  return await put(url, params);
}

export async function getAuthorById(id:number) {
  return await getOne(urls.getOne, id);
}

export async function deleteAuthorById(id:number) {
  return await deleteOne(urls.getOne, id);
}
