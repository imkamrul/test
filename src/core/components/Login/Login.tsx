import React, { useEffect } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Auth from '../../layouts/Auth'
import Styles from './Login.module.scss'
import sendPostRequest from '../../../apis/sendPostRequest'
import { loginSuccess } from '@/apis/authContainer'
import { LOGIN_API_URL } from '@/apis/baseApi'
import { useRouter } from 'next/router'
import { useLocalStorage } from '@/hooks/localState'
import { setCookieValue } from '../../utils/UserManager'

interface UserType {
  name: string
  email: string
  role: string
}

const Login = () => {
  const router = useRouter()

  const onFinish = (values: any) => {
    const data = {
      email: values.email,
      secret: values.password,
      type: 'employee',
    }
  }

  return (
    <Auth>
      <Form
        name="normal_login"
        className={Styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  )
}

export default Login
