export const formatTimeUTC = (date: any) =>{
    return date?.format("YYYY-MM-DDTHH:mm:ss")+'Z'
}
export const convert2bdTime = (date: string) =>{
    return date && date?.replace('Z', '+06:00')
}

export function strEncript(data: string) {
    return btoa(data);
}

export function strDecript(data: string) {
    return atob(data);
}
export function jsonEncript(data: any | any[]) {
    return btoa(JSON.stringify(data));
}

export function jsonDecript(data: any | any[]) {
    return JSON.parse(atob(data));
}