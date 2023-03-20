import { useState } from 'react'
// import { useRouter } from 'next/router'
import Form from '../core/components/Form'
import { IFormBuilder } from '@/core/components/Form/Form.types'

const SampleForm = () => {
  // const router = useRouter()
  const formBuilder: IFormBuilder = {
    title: 'sample form',
    hideTitle: true,
    size: 'small',
    hideFormButtons: false,
    controls: [
      {
        label: 'first name',
        type: 'text',
        name: 'Name',
        placeHolder: 'placeholder',
        colSpan: 8,
        // options?: IOption[];
        validation: [
          {
            required: true,
            message: 'Please input your name',
          },
        ],
        active: true,
      },
      {
        label: 'select',
        type: 'select',
        name: 'lastanme',
        placeHolder: 'placeholder',
        options: [
          { label: 'option 1', value: '1' },
          { label: 'option 2', value: '2' },
        ],
        colSpan: 8,
        active: false,
      },
      {
        label: 'Image',
        type: 'upload',
        name: 'image',
        placeHolder: 'placeholder',
        colSpan: 8,
        active: true,
      },
      {
        label: 'Add Users',
        type: 'formlist',
        name: 'users',
        childControl: [
          { label: 'first Name', type: 'text', name: 'firstName' },
          {
            label: 'last Name',
            type: 'select',
            name: 'lastName',
            options: [
              { label: 'one', value: 1 },
              { label: 'one', value: 1, disabled: true },
            ],
          },
        ],
        placeHolder: 'placeholder',
        options: [
          { label: 'option 1', value: '1' },
          { label: 'option 2', value: '2' },
        ],
        colSpan: 24,
        active: true,
      },
    ],
  }
  const [formConfig, setFormConfig] = useState<IFormBuilder>(formBuilder)
  const defaultValue = { Name: 'abc' }
  const onChange = (changed: any, values: any) => {
    values?.Name == 'abc' && (formBuilder.controls[1].active = true) // optional operation: need to show hide another feild
    setFormConfig({ ...formBuilder })
  }
  const onSubmit = (values: any) => console.log('')

  return (
    <Form
      onSubmit={onSubmit}
      onChange={onChange}
      formBuilder={formConfig}
      defaultValues={defaultValue}
      loading={false}
    />
  )
}

export default SampleForm
