import { Card } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLocalStorage } from '../../../hooks/localstorage.hooks'
// import Logo from '../../components/Logo'
import Styles from './Auth.module.scss'

const Auth = ({ children, ...delegated }: any) => {
  const [profile] = useLocalStorage('profile', null)
  const router = useRouter()

  useEffect(() => {
    if (profile) {
      router.push('/dashboard')
    }
  }, [profile])

  return (
    <div {...delegated} className={Styles.authLayout}>
      <div className={Styles.authLayoutInner}>
        <Card bordered={false}>
          {/* <Logo /> */}
          {children}
        </Card>
      </div>
    </div>
  )
}

export default Auth
