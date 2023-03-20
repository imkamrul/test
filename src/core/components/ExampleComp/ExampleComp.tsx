import { PropTypes } from './ExampleComp.types'

const ExampleComp = (props: PropTypes) => {
  const { x, y } = props
  return (
    <div>
      This is {x} and this is {y}
    </div>
  )
}

export default ExampleComp
