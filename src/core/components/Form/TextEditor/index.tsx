import React, { useEffect, useRef, useState } from 'react'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all.css'
import {
  Button,
  Drawer,
  Tooltip,
  // Typography
} from 'antd'
// @ts-ignore
import * as Showdown from 'showdown'
// import { Resizable } from 're-resizable';
import Styles from './style.module.scss'
import {
  ColumnWidthOutlined,
  FunctionOutlined,
  LineHeightOutlined,
  OneToOneOutlined,
  UploadOutlined,
} from '@ant-design/icons'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import Upload from '../Upload'
import ShowDownComp from '../../ShowdownComp'
// import CloudinaryFileUpload from "../../libs/cloudinary";
// import DropDownMenu from "../../commonComponents/dropdown/DropDownMenu";
// import {dataClasses, sizeData} from "../../utils/commonData";
interface Suggestion {
  preview: string
  value: string
}
// const { Text } = Typography;

function loadSuggestions(text: any): Promise<Suggestion[]> {
  return new Promise((accept) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: 'Andre',
          value: '@andre',
        },
        {
          preview: 'Angela',
          value: '@angela',
        },
        {
          preview: 'David',
          value: '@david',
        },
        {
          preview: 'Louise',
          value: '@louise',
        },
      ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()))
      accept(suggestions)
    }, 250)
  })
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
})
interface Props {
  initialValue?: any
  onChange: (value: any) => void
  title?: string
}

export default function TextEditor({ initialValue, onChange, title }: Props) {
  // console.log({ initialValue })
  const [pictureModalOpen, setPictureModalOpen] = useState(false)
  const [pictureUrl, setPictureUrl] = useState(undefined)
  const [value, setValue] = useState(initialValue)
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview' | undefined>('write')
  const [copied, setCopied] = useState(false)
  const [pixelSize, setPixelSize] = useState({ width: 400, height: 200 })

  const [mdeSize, setMdeSize] = useState({ width: '50%', height: 200 })

  useEffect(() => {
    setValue(initialValue || '')
    // console.log({
    //   copied,
    // })
  }, [initialValue])

  const customSpaceCommand = {
    name: 'space-command',
    icon: () => (
      <span role="img" aria-label="nice">
        <Tooltip title="Space Only">
          <ColumnWidthOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </span>
    ),
    execute: (opts: any) => {
      opts.textApi.replaceSelection('&nbsp;')
    },
  }
  const customTabCommand = {
    name: 'space-command',
    icon: () => (
      <span role="img" aria-label="nice">
        <Tooltip title="8 Space">
          <LineHeightOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </span>
    ),
    execute: (opts: any) => {
      opts.textApi.replaceSelection('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    },
  }

  const customSpaceAllowCommand = {
    name: 'space-command',
    icon: () => (
      <span role="img" aria-label="nice">
        <Tooltip title="Pre Tag">
          <OneToOneOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </span>
    ),
    execute: (opts: any) => {
      opts.textApi.replaceSelection('<pre> </pre>')
    },
  }

  const customCommand = {
    name: 'my-custom-command',
    icon: () => (
      <span role="img" aria-label="nice">
        <Tooltip title="ASCII">
          <FunctionOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </span>
    ),
    execute: (opts: any) => {
      let abc = opts.textApi.getState().selectedText
      let first = '~'
      let result = first.concat(abc, first)
      opts.textApi.replaceSelection(result)
    },
  }
  const customCommandLatex = {
    name: 'my-custom-commandlatex',
    icon: () => (
      <span role="img" aria-label="nice">
        Latex
      </span>
    ),
    execute: (opts: any) => {
      let abc = opts.textApi.getState().selectedText
      let first = '$$'
      let result = first.concat(abc, first)
      opts.textApi.replaceSelection(result)
    },
  }
  const customCommandPictureSet = {
    name: 'picture-upload-through-modal',
    icon: () => (
      <span role="img" aria-label="nice" onClick={() => setPictureModalOpen(true)}>
        <Tooltip title="Image Upload">
          <UploadOutlined style={{ fontSize: '20px' }} />
        </Tooltip>
      </span>
    ),
    execute: (opts: any) => {
      // console.log(opts.textApi.getState());
    },
  }

  function handleModalOkFunction() {
    setPictureModalOpen(!pictureModalOpen)
  }

  function setPictureUrlFromCallback(val: any) {
    setPictureUrl(val?.secure_url)
    // setPictureModalOpen(false)
  }

  function valueSetHandler(val: any) {
    setValue(val)
    onChange(val)
  }

  const handlePreviewValue = (VAL: any) => {
    setMdeSize({
      width: `calc(100% - ${VAL.width}px)`,
      height: VAL.height,
    })
    setPixelSize(VAL)
  }
  const reactMdeRef = useRef(null)

  useEffect(() => {
    const reactMde = reactMdeRef.current
    // @ts-ignore
    const mdeText = reactMde?.getElementsByClassName('mde-text')[0] as HTMLElement
    mdeText.style.height = `${mdeSize.height - 2}px`
  }, [mdeSize, reactMdeRef.current])

  return (
    <div className="d-flex">
      <div style={{ flex: 1, maxWidth: mdeSize.width || '50%', overflow: 'auto' }}>
        <div className="container" ref={reactMdeRef}>
          <ReactMde
            disablePreview
            value={value}
            onChange={valueSetHandler}
            selectedTab={selectedTab}
            // minEditorHeight={mdeSize.height}
            onTabChange={setSelectedTab}
            commands={{
              ascii: customCommand,
              latex: customCommandLatex,
              'all-space': customSpaceAllowCommand,
              space: customSpaceCommand,
              tab: customTabCommand,
              pictureSet: customCommandPictureSet,
            }}
            toolbarCommands={[
              [
                'bold',
                'italic',
                'header',
                'quote',
                'image',
                'code',
                'ordered-list',
                'ascii',
                'space',
                'tab',
                'all-space',
                'pictureSet',
              ],
            ]}
            generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
            loadSuggestions={loadSuggestions}
            childProps={{
              writeButton: {
                tabIndex: -1,
              },
            }}
          />
          <Drawer
            title="Media Upload"
            placement="right"
            closable={false}
            onClose={handleModalOkFunction}
            visible={pictureModalOpen}
            width={'320'}
          >
            <Upload style={{ height: 100 }} onChange={setPictureUrlFromCallback}>
              Click Here to upload Image
            </Upload>
            <br />
            {pictureUrl && (
              <>
                <img src={pictureUrl} style={{ width: 100 }} alt="" />
                {/*<CopyToClipboard text={pictureUrl || ''} onCopy={() => setCopied(true)}>*/}
                  <Button block> Copy Url </Button>
                {/*</CopyToClipboard>*/}
              </>
            )}
          </Drawer>
        </div>
      </div>
      <div>
        <div className={Styles.previewHeader}>
          <h4>Preview</h4>
          <small>
            Drag edges and resize (width: {pixelSize.width}px, height{pixelSize.height}px)
          </small>
        </div>
        <ShowDownComp
          maxWidth={400}
          minHeight={200}
          resizable
          value={value}
          passRectValue={handlePreviewValue}
        />
      </div>
    </div>
  )
}
