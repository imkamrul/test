import { fileUpload } from './api';
const urls = {
    file: 'file/upload',
};

export async function uploadFile(files:any, isProduct:boolean) {
    let formData = new FormData();
    formData.append("file", files[0]);
    return await fileUpload(urls.file, formData, {isProduct});
}
export async function deleteFile(files:any, isProduct:boolean) {
    let formData = new FormData();
    formData.append("file", files[0]);
    return await fileUpload(urls.file, formData, {isProduct});
}