export const formatTimeUTC = (date: any) =>{
    return date?.format("YYYY-MM-DDTHH:mm:ss")+'Z'
}
export const convert2bdTime = (date: string) =>{
    return date && date?.replace('Z', '+06:00')
}