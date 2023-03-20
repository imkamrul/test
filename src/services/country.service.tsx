import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'countries/all',
  add: 'countries/add',
  getOne: 'countries',
  delete: 'countries'
};

export async function getCountries(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addCountry(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getCountryById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteCountryById(id:number) {
  return await deleteOne(urls.delete, id);
}
