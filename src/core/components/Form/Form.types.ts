import moment from 'moment'
import { ReactNode } from 'react'

export interface IFormBuilder {
  title: string
  type?: string
  class?: string
  layout?: 'horizontal' | 'vertical' | 'inline'
  size?: 'small' | 'middle' | 'large'
  hideTitle?: boolean
  hideFormButtons?: boolean
  hideSubmitBtn?: boolean
  stickyMenu?: boolean
  hideCancelBtn?: boolean
  hideResetBtn?: boolean
  submitBtnTxt?: string
  cancelBtnTxt?: string
  resetBtnTxt?: string
  controls: IFormControl[]
  initialValues?: InitialFormValues
  // onSubmit?: (values: any) => void;
  // onChange?: (changed: any, values: any) => void;
  // onError?: (error: { values: any, errorFields: any, outOfDate: any }) => void
}

export interface IFormControl {
  label: string
  type:
    | 'search'
    | 'text'
    | 'textarea'
    | 'textEditor'
    | 'number'
    | 'password'
    | 'radio'
    | 'select'
    | 'checkbox'
    | 'switch'
    | 'upload'
    | 'formlist'
    | 'datePicker'
    | 'rangePicker'
    | 'timePicker'
    | 'select-tag'
    | 'divider'
    | 'select-search'
    | 'select-multiple'
    | 'playback_input'
    | 'thumbnail_preview'

  name: string
  colSpan?: number
  placeHolder?: string
  previewBase?: string
  validation?: IFormValidation[]
  groupClass?: string
  labelClass?: string
  childControl?: IFormControl[]
  options?: IOption[]
  defaultValue?: any
  showCount?: boolean
  maxLength?: number
  maxNumber?: number
  minNumber?: number
  prefix?: ReactNode
  suffix?: ReactNode
  disabledDate?: (current: moment.Moment) => void
  onChange?: (e: any) => void
  active?: boolean
  disabled?: boolean
  accept?: string
  showTime?: boolean
  uploadPreset?: string
}

export interface IOption {
  value: any
  label: string
  disabled?: boolean
  checked?: boolean
}

export interface IFormValidation {
  required?: boolean
  message?: string
  fields?: any
  len?: number
  max?: number
  min?: number
  pattern?: RegExp
  type?: 'string' | 'number' | 'boolean' | 'url' | 'email'
  validator?: (rule: any, value: any) => Promise<any>
}

export interface InitialFormValues {
  class: string
  group: string
  subject: string
  chapter: string
  topic: string
  question_type: string
  topics: string
  dificulty_level: string
  division: string
  board_group: string
  model_group: string
  practice_group: string
  test_group: string
  solution: string
  category?: string
}
