import React from 'react'
import Form from '../Form'
import Style from './Filter.module.scss'
import { IFormBuilder } from '../Form/Form.types'
interface FilterProps {
  formConfig: IFormBuilder
  onFilter: (changed: any, value: any) => void
  defaultValues?: any
  onSearch?: (value: string, name: string) => void
  resetFields?: any
}

const Filter = ({ formConfig, onFilter, resetFields, onSearch, defaultValues }: FilterProps) => {
  return (
    <div className={`${Style.advanced_search}`}>
      <Form
        onSearch={onSearch}
        defaultValues={defaultValues}
        onChange={onFilter}
        resetFields={resetFields}
        formBuilder={formConfig}
        loading={false}
      />
    </div>
  )
}

export default Filter
