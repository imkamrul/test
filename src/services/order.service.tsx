import { deleteOne, getAll, getOne, post, put } from './api';

const urls = {
  getAll: 'orders/all',
  add: 'orders/add',
  update: 'orders',
  getOne: 'orders',
  delete: 'orders'
};

export async function getOrders(params:any) {
  return getAll(urls.getAll, params);
}

// todo: Make functional
export async function addOrder(params:any) {
  return await post(urls.add, params);
}

export async function updateOrder(params:any, id:number) {
  let url = urls.update + '/' + id;
  return await put(url, params);
}

// todo: Make functional
export async function getOrderById(id:number) {
  return await getOne(urls.getOne, id);
}

// todo: Make functional
export async function deleteOrderById(id:number) {
  return await deleteOne(urls.delete, id);
}

export async function updateOrderStatus(value:any, id:number) {
  let url = urls.getOne + '/update-status';
  return await getOne(url, id, { orderStatus: value });
}