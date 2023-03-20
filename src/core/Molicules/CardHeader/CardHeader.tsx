import Styles from './CardHeader.module.scss'
import { CardHeaderProps } from './CardHeader.types'

const CardHeader = (props: CardHeaderProps) => {
  const { title, children } = props
  return (
    <div className={`ant-card-head ${Styles.antCardHeadCustom}`}>
      <div className="ant-card-head-wrapper">
        <div className="ant-card-head-title">{title}</div>
        <div className="ant-card-head-children">{children}</div>
      </div>
    </div>
  )
}

export default CardHeader
