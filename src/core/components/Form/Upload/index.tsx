import s from './style.module.scss'
import { Fragment } from 'react'
import { notification } from 'antd'

interface IUpload {
  children?: any
  style?: any
  className?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onError?: (e: any) => void
  onChange?: (e: any) => void
  replace?: any
  defaultStyles?: boolean
  uploadPreset?: string
}

const Upload = ({
  children,
  style,
  className,
  accept,
  multiple,
  disabled,
  onError,
  onChange,
  replace,
  defaultStyles,
  uploadPreset,
}: IUpload) => {
  const handleOpenWidget = () => {
    try {
      // @ts-ignore
      const myWidget = window?.cloudinary?.createUploadWidget(
        {
          cloudName: 'cross-border-education-technologies-pte-ltd',
          uploadPreset: uploadPreset ? uploadPreset : 'cross-border-education-technologies-pte-ltd',
          // cropping: true, //add a cropping step
          // showAdvancedOptions: true,  //add advanced options (public_id and tag)
          // sources: [ "local", "url"], // restrict the upload sources to URL and local files
          // multiple: false,  //restrict upload to a single file
          // folder: "user_images", //upload files to the specified folder
          // tags: ["users", "profile"], //add the given tags to the uploaded files
          // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
          // clientAllowedFormats: ["images"], //restrict uploading to image files only
          // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
          // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
          // theme: "purple", //change to a purple theme
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            // console.log('Done! Here is the image info: ', result.info)
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange && onChange(result.info)
          }
          if (error) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onError && onError(error)
            notification.error({
              message: `Sorry,Can't open the uploader!`,
              description: `Your browser is blocking third-party cookies. If you're using chrome, please go to chrome://settings/cookies from your browser and uncheck the option "Block third- party cookies"`,
            })
          }
        }
      )
      myWidget.open()
    } catch (error) {
      notification.error({
        message: `Sorry,Can't open the uploader!`,
        description: `Your browser is blocking third-party cookies. If you're using chrome, please go to chrome://settings/cookies from your browser and uncheck the option "Block third- party cookies"`,
      })
    }
  }

  const handleFileSelect = async (e: any) => {
    if ('preventDefault' in e) {
      e.stopPropagation()
      e.preventDefault()
    }
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !disabled && handleOpenWidget()
  }

  return (
    <Fragment>
      <div
        className={
          className
            ? `${!defaultStyles ? s.label : ''} ${className} ${replace ? s.rep : ''} ${
                disabled ? s.disabled : ''
              }`
            : `${!defaultStyles ? s.label : ''} ${replace ? s.rep : ''} ${
                disabled ? s.disabled : ''
              }`
        }
        style={{ ...style }}
        // onDragOver={handleDragOver}
        // onDragLeave={handleDragLeave}
        // onDrop={handleFileSelect}
        onClick={handleFileSelect}
      >
        {children}
      </div>
    </Fragment>
  )
}

export default Upload
