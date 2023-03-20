import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'categories/all',
  addCategory: 'categories/add',
  updateCategory: 'categories',
  getOne: 'categories',
  delete: 'categories',
};

export async function getCategories(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addCategory(group:any) {
  return await post(urls.addCategory, group);
}

export async function updateCategory(group:any, id:number) {
  let url = urls.updateCategory + '/' + id;
  return await put(url, group);
}
// todo: Make functional
export async function getCategoryById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteCategoryById(id:number) {
  return await deleteOne(urls.delete, id);
}
