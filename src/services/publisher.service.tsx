import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'publishers/all',
  addPublisher: 'publishers/add',
  updatePublisher: 'publishers',
  getOne: 'publishers',
  delete: 'publishers',
};

export async function getPublishers(params?:any) {
  return getAll(urls.getAll, params);
}
// todo: Make functional
export async function addPublisher(group:any) {
  return await post(urls.addPublisher, group);
}
export async function updatePublisher(group:any, id:number) {
  let url = urls.updatePublisher + '/' + id;
  return await put(url, group);
}
// todo: Make functional
export async function getPublisherById(id:number) {
  return await getOne(urls.getOne, id);
}
// todo: Make functional
export async function deletePublisherById(id:number) {
  return await deleteOne(urls.delete, id);
}
