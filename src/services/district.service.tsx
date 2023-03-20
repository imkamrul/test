import { deleteOne, getAll, getOne, post } from './api';

const urls = {
  getAll: 'districts/all',
  add: 'districts/add',
  getOne: 'districts',
  delete: 'districts'
};

export async function getDistricts(params:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addDistrict(group:any) {
  return await post(urls.add, group);
}
// todo: Make functional
export async function getDistrictById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deleteDistrictById(id:number) {
  return await deleteOne(urls.delete, id);
}
