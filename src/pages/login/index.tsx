import Form from "@/core/components/Form"
import {IFormBuilder} from "@/core/components/Form/Form.types";

const LoginPage = () => {

  const loginForm: IFormBuilder = {
    title: 'login',
    layout: 'vertical',
    hideCancelBtn: true,
    hideResetBtn: true,
    controls: [
      {
        label: 'Email',
        type: 'text',
        name: 'email',
        placeHolder: 'Put your email here.',
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: 'Please enter a email',
          },{
            type: "email",
            message: 'Please enter valid email',
          },
        ],
      },
      {
        label: 'Password',
        type: 'password',
        name: 'password',
        placeHolder: 'Put your password here.',
        colSpan: 12,
        active: true,
        validation: [
          {
            required: true,
            message: 'Please enter a email',
          },
        ],
      },
    ],
  }

  const onSubmit = (value:any, form: any) => {
    console.log(value, form)
  }

  return <div>

    <Form loading={false} formBuilder={loginForm} onSubmit={onSubmit}></Form>

  </div>
}

export default LoginPage
