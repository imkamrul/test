
export const capitalizeFirstLetter = (string: string) => {
  return typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : string
}

export function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text)
  }
}

export const getDuration = (d1: Date, d2: Date) => {
  const date1: Date = new Date(d1)
  const date2: Date = new Date(d2)
  // @ts-ignore
  const diffInMs: number = Math.abs(date2 - date1)
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
}
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