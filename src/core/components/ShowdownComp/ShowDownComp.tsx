/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react'
import * as Showdown from 'showdown'
import showdownKatex from 'showdown-katex'
import Styles from './ShowDownComp.module.scss'

interface PropTypes {
  value: any
  style?: any
  resizable?: boolean
  minWidth?: number | string
  minHeight?: number | string
  maxHeight?: number | string
  maxWidth?: number | string
  passRectValue?: (value: any) => void
}

const ShowDownComp = ({
  value,
  style,
  resizable = false,
  minHeight = 200,
  minWidth = 300,
  maxHeight = 600,
  maxWidth = 600,
  passRectValue,
}: PropTypes) => {
  const { resizeHandlerStyle, showdownResizable } = Styles
  const converters = new Showdown.Converter({
    parseImgDimensions: true,
    smoothLivePreview: true,
    simpleLineBreaks: true,
    extensions: [
      showdownKatex({
        throwOnError: true,
        displayMode: true,
      }),
    ],
  })

  const resizeableEl = useRef<HTMLDivElement>(null)

  const [pressed, setPressed] = useState<boolean>(false)
  const [rectValue, setRectValue] = useState<any>({
    x: 0,
    y: 0,
    width: 'auto',
    height: resizable ? minHeight : 'auto',
  })

  const resize = (e: any) => {
    const rect = resizeableEl?.current?.getBoundingClientRect() as DOMRect
    const { x, y, width, height } = rect

    const calcWidth = width + (e.clientX - (x + width))
    const calcHeight = height + (e.clientY - (y + height))

    if (pressed) {
      setRectValue((prev: any) => {
        return {
          ...prev,
          width: calcWidth > maxWidth ? maxWidth : calcWidth > minWidth ? calcWidth : minWidth,
          height: calcHeight > minHeight ? calcHeight : minHeight,
        }
      })

      passRectValue &&
        passRectValue({
          width: calcWidth > maxWidth ? maxWidth : calcWidth > minWidth ? calcWidth : minWidth,
          height: calcHeight > minHeight ? calcHeight : 200,
        })
    }

    document.addEventListener('mouseup', () => {
      setPressed(false)
      document.removeEventListener('mousemove', resize)
    })
  }

  useEffect(() => {
    const rect = resizeableEl?.current?.getBoundingClientRect()
    if (resizeableEl.current) {
      setRectValue({
        x: rect?.left || 0,
        y: rect?.top || 0,
        width: maxWidth || rect?.width || 0,
        height: rect?.height || 0,
      })
    }
  }, [resizeableEl.current])

  useEffect(() => {
    if (pressed) {
      document.addEventListener('mousemove', resize)
    }
    document.addEventListener('mouseup', () => {
      setPressed(false)
      document.removeEventListener('mousemove', resize)
    })
  }, [pressed])

  return (
    <div
      className={resizable ? showdownResizable : ''}
      style={{ width: rectValue.width, height: rectValue.height }}
      ref={resizeableEl}
    >
      <div
        className={`showdown-content${style ? ` ${style}` : ''}`}
        dangerouslySetInnerHTML={{
          __html: converters.makeHtml(value),
        }}
      />
      {resizable && <div className={resizeHandlerStyle} onMouseDown={() => setPressed(true)}></div>}
    </div>
  )
}

export default ShowDownComp
