import {http} from "@/helpers/http";

export const getAll = (path: string, qParams?: any) => {
  const url = `${path}?${processQuery(qParams)}`;
  return http.get(url);
};

export const getAllUnPaged = (path: string, qParams: any = {}) => {
  qParams.unPaged = true;
  const url = `${path}?${processQuery(qParams)}`;
  return http.get(url);
};

export const getOne = (path: string, id: any, qParams: any ={}) => {
  const url = `${path}/${id}?${processQuery(qParams)}`;
  return http.get(url);
};

export const put = (path: string, obj: any, qParams: any = {}) => {
//  const url = `${path}?${processQuery(qParams)}`;
  return http.put(path, JSON.stringify(obj));
};

export const patch = (path: string, obj: any, qParams: any = {}) => {
  //  const url = `${path}?${processQuery(qParams)}`;
    return http.patch(path, JSON.stringify(obj));
  };

export const post = (path: string, obj: any, qParams: any = {}) => {
  //const url = `${path}?${processQuery(qParams)}`;
  return http.post(path, JSON.stringify(obj));
};

export const postWithParam = (path: string, id: any, obj: any, qParams: any) => {
  const url = `${path}/${id}?${processQuery(qParams)}`;
  return http.post(url, obj || null);
};

export const deleteOne = (path: string, id: any, qParams: any = {}) => {
  const url = `${path}/${id || ''}?${processQuery(qParams)}`;
  return http.delete(url);
};

//   export const  deleteMulti=(path, arr, qParams)=> {
//     const url = `${path}?${processQuery(qParams)}`;
//     return http.request('delete', url, version ? { body: arr, headers } : { body: arr });
//   }

export const fileUpload = (path: string, obj: any, qParams: any) => {
  const url = `${path}?${processQuery(qParams)}`;
  const options = { reportProgress: true, observe: 'events' };
  // @ts-ignore
  return http.post(url, obj, options);
};

export const getFileUrl = (path: string, qParams: any) => {
  const url = `${path}?${processQuery(qParams)}`;
  const options = {
    responseType: 'arraybuffer',
    reportProgress: true,
    observe: 'events',
  };
  // @ts-ignore
  return http.get(url, options);
};
export const downloadFile = (path: string, qParams: any) => {
  const url = `${path}?${processQuery(qParams)}`;
  const options = {
    responseType: 'arraybuffer',
    reportProgress: false,
    observe: 'events',
  };
  // @ts-ignore
  return http.get(url, options);
};

//   export const fileUploadPost=(path, obj, qParams, version) =>{
//     const url = `${path}?${processQuery(qParams)}`;
//     const options = { reportProgress: true, observe: 'events' };
//     return http.post(url, obj, options).pipe(
//       map(event => {
//         switch (event.type) {
//           case HttpEventType.UploadProgress:
//             return { progress: Math.round(event.loaded * 100 / event.total) };
//           // break;
//           case HttpEventType.Response:
//             return event;
//         }
//       }));
//   }

export const processQuery = (obj: any) => {
  console.log("Processed Object: ", obj)
  let str = '';
  if (obj === null || obj === undefined) {
    return str;
  }
  str = '';
  const l = Object.keys(obj).length - 1;
  Object.keys(obj).forEach((key, i) => {
    str += `${key}=${obj[key] === (undefined || null) ? '' : obj[key]}`;
    l !== i && (str += '&');
  });
  return str;
};
