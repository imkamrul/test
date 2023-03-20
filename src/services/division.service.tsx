import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'divisions/all',
  add: 'divisions/add',
  getOne: 'divisions',
  delete: 'divisions',
};

export async function getDivisions(params:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addDivision(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getDivisionById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteDivisionById(id:number) {
  return await deleteOne(urls.delete, id);
}
