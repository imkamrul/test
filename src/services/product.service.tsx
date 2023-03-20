import { deleteOne, getAll, getOne, patch, post, put } from './api';

const urls = {
  getAll: 'products/all',
  add: 'products/add',
  getOne: 'products',
  getDetails: 'products/details',
  delete: 'products',
  packageProduct: 'products/pack/details'
};

export async function getProducts(params:any) {
  return getAll(urls.getAll, params);
}

// todo: Make functional
export async function addProduct(product:any) {
  console.log('-------Added Product: ------', product);
  return await post(urls.add, product);
}

export async function updateProduct(id:number, data:any) {
  let url = urls.getOne + '/' + id;
  return await put(url, data);
}

// todo: Make functional
export async function getProductById(id:number) {
  return await getOne(urls.getOne, id);
}

export async function getProductDetailsById(id:number) {
  return await getOne(urls.getDetails, id);
}

// todo: Make functional
export async function deleteProductById(id:number) {
  return await deleteOne(urls.delete, id);
}

export async function getPackageProduct(id:number, packId:number) {
  console.log('id:', id, 'packId:', packId);
  return await getOne(urls.packageProduct, id, { packId: packId });
}
