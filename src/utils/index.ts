import { IOption } from '../components/Form/Form.types'

export const getFilterOptions = (commonData: any[]): any[] | undefined => {
  let DATA: any[] = []
  commonData.map((dta) => {
    DATA = [...DATA, { label: dta.value, value: dta.value }]
  })
  return DATA
}
export const limitedCharacterText = (value: string, maxLength: number) => {
  if (value?.length > maxLength) {
    return value.substring(0, maxLength) + '...'
  }
  return value
}

export const capitalizeFirstLetter = (string: string) => {
  return typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : string
}

export const getOptions = (
  commonData: any[] | undefined | null,
  label: string | string[] = 'label',
  value = 'value'
): IOption[] | undefined => {
  let DATA: IOption[] = []
  if (label && Array.isArray(label)) {
    commonData &&
      commonData.map((dta) => {
        DATA = [...DATA, { label: `${dta[label[0]]} ${dta[label[1]]}`, value: dta[value] }]
      })
  } else {
    commonData &&
      commonData.map((dta) => {
        DATA = [...DATA, { label: dta[label], value: dta[value] }]
      })
  }
  return DATA
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
