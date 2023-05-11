/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Radio,
  Row,
  Select,
  Divider,
  Spin,
  Switch,
  Card,
  Empty,
} from "antd";
import React, { ReactNode, memo, useEffect, useState } from "react";
import Upload from "./Upload";
import s from "./form.module.scss";
import { IFormBuilder, IFormControl } from "./Form.types";
import {
  PlusOutlined,
  MinusOutlined,
  CopyOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import TextEditor from "./TextEditor";
import ReactPlayer from "react-player";
import { copyTextToClipboard } from "@/utils";
// const API_URL = '';

interface IProps {
  formBuilder: IFormBuilder;
  defaultValues?: any;
  isUpdate?: boolean;
  showTitle?: boolean;
  reset?: boolean;
  resetFields?: any;
  resetOnSubmit?: boolean;
  onCancel?: (values: any) => void;
  onSubmit?: (values: any, form: any) => void;
  onError?: (error: { values: any; errorFields: any; outOfDate: any }) => void;
  onChange?: (changed: any, values: any) => void;
  onFieldsChange?: (changed: string[]) => void;
  loading?: boolean;
  isSubmitLoading?: boolean;
  submitBtnText?: string;
  onSearch?: (value: string, name: string) => void;
}

const DynamicForm = ({
  formBuilder,
  defaultValues,
  isUpdate,
  loading,
  reset,
  resetFields,
  resetOnSubmit = false,
  onChange,
  onSearch,
  onFieldsChange,
  onError,
  onSubmit,
  isSubmitLoading,
  submitBtnText,

  onCancel = () => {},
}: IProps) => {
  // console.log({ defaultValues })
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const [files, setfiles] = useState<any>({});
  const [fileList, setFileList] = useState<any>([]);
  let changedFields = new Set<string>();

  const getChangedFields = (formFields: any[]) => {
    // console.log(fileList, files)
    // const arr: string[] = []
    // // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // formFields &&
    //   formFields.forEach((item) => {
    //     if (item?.touched) arr.push(item?.name[0])
    //   })
    //
    // console.log(arr)
    // onFieldsChange && onFieldsChange(arr)
  };

  const [formControls, setFormControls] = useState(formBuilder?.controls);

  useEffect(() => {
    if (resetFields) {
      form.setFieldsValue(resetFields);
    }
  }, [resetFields]);

  useEffect(() => {
    const file: any = files;
    const items = formBuilder?.controls?.map((control: any) => {
      if (control?.type === "upload") {
        defaultValues && (file[control.name] = defaultValues[control.name]);
      }
      if (control?.type === "textEditor") {
        control.defaultValue = defaultValues?.[control?.name];
      }
      if (control?.type === "thumbnail_preview") {
        setThumbnailPreview(defaultValues?.[control.name]);
      }
      if (control?.type === "playback_input") {
        setPlayBackUrl(defaultValues?.[control.name]);
      }
      return control;
    });
    setFormControls(items);
    setfiles({ ...file });
    isUpdate ? form.setFieldsValue({ ...defaultValues }) : form.resetFields();
    onChange && onChange(defaultValues, form.getFieldsValue());
  }, [defaultValues]);

  useEffect(() => {
    const file: any = files;
    const items = formBuilder?.controls?.map((control: any) => {
      if (control?.type === "upload") {
        defaultValues && (file[control.name] = defaultValues[control.name]);
      }
      if (control?.type === "textEditor") {
        control.defaultValue = defaultValues?.[control?.name];
      }
      return control;
    });
    setFormControls(items);
  }, [formBuilder.controls]);

  useEffect(() => {
    reset && form && form?.resetFields(defaultValues || {});
  }, [reset]);

  const onUploadChange = (
    res: any,
    fieldName: string,
    isReplaceable?: boolean
  ) => {
    const file: any = files;
    if (res) {
      if (file[fieldName]) {
        // if (isReplaceable) {
        file[fieldName][0] = { path: res.secure_url };
        // } else {
        //     file[fieldName].push({ path: res.data.data.filename });
        // }
      } else {
        file[fieldName] = [];
        file[fieldName].push({ path: res.secure_url });
      }
    }
    const formVal = form.getFieldsValue();
    const fileObj: any = {};
    fileObj[fieldName] = file[fieldName];
    form.setFieldsValue({
      ...formVal,
      ...fileObj,
    });
    setfiles({ ...file });
  };

  const handleFormListFileUpload = (
    res: any,
    parent: string,
    index: number,
    fieldName: string
  ) => {
    const file: any = fileList;
    if (res) {
      if (
        file[parent] &&
        file[parent][index] &&
        file[parent][index][fieldName]
      ) {
        // if (isReplaceable) {
        file[parent][index][fieldName][0] = { path: res.secure_url };
      } else {
        !file[parent] && (file[parent] = []);
        file[parent][index] = {};
        file[parent][index][fieldName] = res.secure_url;
      }
    }

    const formVal = form.getFieldsValue();
    const fileObj: any = {};
    fileObj[parent] = file[parent];
    formVal[parent] &&
      formVal[parent][index] &&
      (formVal[parent][index][fieldName] = fileObj[parent][index][fieldName]);
    form.setFieldsValue({
      ...formVal,
    });
    setFileList({ ...file });
  };

  const onTextEditorChange = (value: any, fieldName: string) => {
    const formVal = form.getFieldsValue();
    formVal[fieldName] = value;
    form.setFieldsValue({ ...formVal });
  };

  const [playbackUrl, setPlayBackUrl] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const onPlaybackInputChange = (e: any, item: any) => {
    setPlayBackUrl(e.target.value);
    item?.onChange && item?.onChange(e, form.getFieldsValue());
  };

  const onThumbnailPreviewChange = (e: any, item: any) => {
    setThumbnailPreview(e.target.value);
    item?.onChange && item?.onChange(e, form.getFieldsValue());
  };

  return (
    <Spin spinning={loading}>
      <div>
        {!formBuilder?.hideTitle && (
          <h3 className="mb-4">{formBuilder.title}</h3>
        )}
        <Form
          form={form}
          labelWrap
          name="basic"
          layout={formBuilder.layout}
          size={formBuilder.size}
          preserve={false}
          initialValues={{ ...defaultValues }}
          onFinishFailed={(error) => {
            onError && onError(error);
          }}
          onFinish={(values) => {
            onSubmit && onSubmit(values, form);
            resetOnSubmit &&
              (isUpdate
                ? form.setFieldsValue({ ...defaultValues })
                : form.resetFields());
          }}
          scrollToFirstError={true}
          onFieldsChange={(changed, values) => {
            // @ts-ignore
            changedFields.add(changed[0].name[0]);
            // @ts-ignore
            onFieldsChange && onFieldsChange([...changedFields]);
            // getChangedFields(changedFields)
          }}
          onValuesChange={(changed, values) =>
            onChange && onChange(changed, values)
          }
        >
          <Row gutter={24}>
            {formControls?.map((item: any, i) => {
              // @ts-ignore
              // @ts-ignore
              return item?.active && item.active !== false ? (
                <Col span={item?.colSpan || 24} key={i}>
                  {item.type === "divider" && (
                    <Divider
                      className="sample-class"
                      style={{ color: "#c2c3cc" }}
                      orientation="center"
                      plain
                      dashed
                    >
                      {item.label}
                    </Divider>
                  )}
                  {item.type === "playback_input" && (
                    <>
                      <Form.Item
                        name={item.name}
                        label={item.label}
                        rules={item.validation || null}
                      >
                        <Input
                          prefix={item?.prefix}
                          suffix={item?.suffix}
                          disabled={item?.disabled}
                          showCount={item?.showCount}
                          maxLength={item?.maxLength}
                          placeholder={item?.placeHolder}
                          onChange={(e) => onPlaybackInputChange(e, item)}
                        />
                      </Form.Item>

                      <Card>
                        {playbackUrl ? (
                          <>
                            {/* @ts-ignore */}
                            <ReactPlayer
                              controls
                              url={playbackUrl}
                              width={"100%"}
                              height={"auto"}
                            />
                          </>
                        ) : (
                          <Empty />
                        )}
                      </Card>
                      <Divider style={{ border: 0 }} />
                    </>
                  )}

                  {item.type === "thumbnail_preview" && (
                    <>
                      <Form.Item
                        name={item.name}
                        label={item.label}
                        rules={item.validation || null}
                      >
                        <Input
                          prefix={item?.prefix}
                          suffix={item?.suffix}
                          disabled={item?.disabled}
                          showCount={item?.showCount}
                          maxLength={item?.maxLength}
                          placeholder={item?.placeHolder}
                          onChange={(e) => onThumbnailPreviewChange(e, item)}
                        />
                      </Form.Item>

                      <Card>
                        {thumbnailPreview ? (
                          <div className="video-thumb-container">
                            <img alt="" src={thumbnailPreview} />
                          </div>
                        ) : (
                          <Empty />
                        )}
                      </Card>
                      <Divider style={{ border: 0 }} />
                    </>
                  )}
                  {item.type === "text" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Input
                        prefix={item?.prefix}
                        suffix={item?.suffix}
                        disabled={item?.disabled}
                        showCount={item?.showCount}
                        maxLength={item?.maxLength}
                        placeholder={item?.placeHolder}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                      />
                    </Form.Item>
                  )}
                  {item.type === "search" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Input.Search
                        prefix={item?.prefix}
                        suffix={item?.suffix}
                        disabled={item?.disabled}
                        enterButton
                        allowClear
                        placeholder={item?.placeHolder || ""}
                        maxLength={item?.maxLength}
                        onSearch={(value) => {
                          // item?.onChange && item?.onChange(e, form.getFieldsValue());
                          onSearch && onSearch(value, item.name);
                        }}
                      />
                    </Form.Item>
                  )}
                  {item.type === "textarea" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Input.TextArea
                        prefix={item?.prefix}
                        disabled={item?.disabled}
                        showCount={item?.showCount}
                        maxLength={item?.maxLength}
                        placeholder={item?.placeHolder}
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                      />
                    </Form.Item>
                  )}
                  {item.type === "textEditor" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <TextEditor
                        initialValue={item?.defaultValue}
                        onChange={(value) => {
                          onTextEditorChange(value, item.name);
                          // item?.onChange && item?.onChange(value, form.getFieldsValue())
                        }}
                      />
                    </Form.Item>
                  )}
                  {item.type === "number" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <InputNumber
                        prefix={item?.prefix}
                        style={{ width: "100%" }}
                        type="number"
                        disabled={item?.disabled}
                        max={item?.maxNumber}
                        min={item?.minNumber || 0}
                        placeholder={item?.placeHolder}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                      />
                    </Form.Item>
                  )}
                  {item.type === "password" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Input.Password
                        prefix={item?.prefix}
                        suffix={item?.suffix}
                        disabled={item?.disabled}
                        placeholder={item?.placeHolder}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                      />
                    </Form.Item>
                  )}
                  {item.type === "radio" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Radio.Group
                        disabled={item?.disabled}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                      >
                        {item.options &&
                          item.options.map((op: any) => (
                            <Radio.Button
                              key={Math.random()}
                              value={op.value}
                              disabled={op?.disabled}
                            >
                              {op.label}
                            </Radio.Button>
                          ))}
                      </Radio.Group>
                    </Form.Item>
                  )}
                  {item.type === "select" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                      preserve={false}
                    >
                      <Select
                        disabled={item?.disabled}
                        placeholder={item?.placeHolder}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                      >
                        {item.options &&
                          item.options.map((op: any) => (
                            <Select.Option
                              key={Math.random()}
                              value={op.value}
                              disabled={op?.disabled}
                            >
                              {op.label}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  )}

                  {item.type === "select-multiple" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Select
                        showSearch
                        allowClear
                        mode="multiple"
                        disabled={item?.disabled}
                        placeholder={item?.placeHolder}
                        // onChange={(e) => item?.onChange && item?.onChange(e, form.getFieldsValue())}
                        filterOption={(input, option) =>
                          (option!.children as unknown as string)
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                      >
                        {item.options &&
                          item.options.map((op: any) => (
                            <Select.Option
                              key={Math.random()}
                              value={op.value}
                              disabled={op?.disabled}
                            >
                              {op.label}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  )}
                  {item.type === "select-search" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Select
                        showSearch
                        allowClear
                        disabled={item?.disabled}
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                        optionFilterProp="label"
                        placeholder={item?.placeHolder}
                        filterOption={(input, option) =>
                          (option!.children as unknown as string)
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                      >
                        {item.options &&
                          item.options.map((op: any) => (
                            <Select.Option
                              key={Math.random()}
                              value={op.value}
                              label={op.label}
                              disabled={op?.disabled}
                            >
                              {op.label}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  )}
                  {item.type === "select-tag" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Select
                        mode="tags"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder={item?.placeHolder}
                        disabled={item?.disabled}
                        optionFilterProp="label"
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                      >
                        {item.options &&
                          item.options.map((op: any) => (
                            <Select.Option
                              key={Math.random()}
                              value={op.value}
                              label={op.label}
                              disabled={op?.disabled}
                            >
                              {op.label}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  )}
                  {item.type === "checkbox" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Checkbox.Group
                        disabled={item?.disabled}
                        options={item?.options}
                        onChange={(e) => {
                          item?.onChange &&
                            item?.onChange(e, form.getFieldsValue());
                        }}
                      />
                    </Form.Item>
                  )}
                  {item.type === "datePicker" && (
                    // @ts-ignore
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      {/* @ts-ignore */}
                      <DatePicker
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                        disabledDate={(current) => item.disabledDate(current)}
                        placeholder={item?.placeHolder}
                        style={{ width: "100%" }}
                        disabled={item?.disabled}
                        showTime={item?.showTime}
                      />
                    </Form.Item>
                  )}
                  {item.type === "rangePicker" && (
                    // @ts-ignore
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      {/* @ts-ignore */}
                      <RangePicker
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                        // disabled={current => item.disabledDate(current)}
                        placeholder={item?.placeHolder}
                        style={{ width: "100%" }}
                        disabled={item?.disabled}
                      />
                    </Form.Item>
                  )}
                  {item.type === "timePicker" && (
                    // @ts-ignore
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      {/* @ts-ignore */}
                      <DatePicker
                        picker="time"
                        use12Hours={true}
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                        // disabledDate={current => item.disabledDate(current)}
                        placeholder={item?.placeHolder}
                        style={{ width: "100%" }}
                        disabled={item?.disabled}
                      />
                    </Form.Item>
                  )}
                  {item.type === "formlist" && (
                    <>
                      <p>
                        {item?.validation ? (
                          <span style={{ color: "#ff4d4f" }}>* </span>
                        ) : (
                          ""
                        )}
                        <span style={{ fontWeight: "600" }}>{item.label}</span>
                      </p>
                      <Form.List
                        name={item.name}
                        rules={item?.validation || null}
                        initialValue={defaultValues && defaultValues[item.name]}
                      >
                        {(fields, { add, remove }, { errors }) => (
                          <>
                            {fields.map(({ key, name, ...restField }) => (
                              <div
                                key={key}
                                style={{ display: "flex", gap: 4 }}
                              >
                                {item?.childControl &&
                                  item.childControl.map(
                                    (child: IFormControl, j: number) => (
                                      <Form.Item
                                        key={j}
                                        {...restField}
                                        name={[name, child.name]}
                                        rules={child.validation || undefined}
                                        style={{ flex: 1 }}
                                        preserve={false}
                                      >
                                        {child.type === "upload" ? (
                                          <div className="formlist-file-upload">
                                            <Upload
                                              defaultStyles
                                              disabled={
                                                child?.disabled || false
                                              }
                                              onChange={(e) => {
                                                handleFormListFileUpload(
                                                  e,
                                                  item.name,
                                                  key,
                                                  child.name
                                                );
                                                item?.onChange &&
                                                  item?.onChange(
                                                    e,
                                                    form.getFieldsValue()
                                                  );
                                              }}
                                              multiple={true}
                                              uploadPreset={child?.uploadPreset}
                                            >
                                              <Button icon={<UploadOutlined />}>
                                                Upload
                                              </Button>
                                            </Upload>
                                            {fileList?.[item.name]?.[key]?.[
                                              child.name
                                            ] && (
                                              <small className={s.break_all}>
                                                {
                                                  fileList?.[item.name]?.[
                                                    key
                                                  ]?.[child.name]
                                                }
                                              </small>
                                            )}
                                            {defaultValues?.[item.name]?.[
                                              key
                                            ]?.[child.name] && (
                                              <small className={s.break_all}>
                                                {
                                                  defaultValues?.[item.name]?.[
                                                    key
                                                  ]?.[child.name]
                                                }
                                              </small>
                                            )}
                                          </div>
                                        ) : child.type === "select" ? (
                                          <Select
                                            placeholder={child.label}
                                            style={{ width: "100%" }}
                                            disabled={child?.disabled || false}
                                          >
                                            {child.options &&
                                              child.options.map((op: any) => (
                                                <Select.Option
                                                  key={Math.random()}
                                                  value={op.value}
                                                >
                                                  {op.label}
                                                </Select.Option>
                                              ))}
                                          </Select>
                                        ) : child.type === "number" ? (
                                          <InputNumber
                                            style={{ width: "100%" }}
                                            min={0}
                                            placeholder={child.label}
                                            disabled={child?.disabled || false}
                                          />
                                        ) : (
                                          <Input
                                            placeholder={child.label}
                                            showCount={child?.showCount}
                                            maxLength={child?.maxLength}
                                            disabled={child?.disabled || false}
                                          />
                                        )}
                                      </Form.Item>
                                    )
                                  )}
                                <Button
                                  size="small"
                                  type="primary"
                                  onClick={() => remove(name)}
                                  style={{
                                    height: 18,
                                    width: 18,
                                    marginTop: 7,
                                  }}
                                  danger
                                  icon={<MinusOutlined />}
                                />
                              </div>
                            ))}
                            <Form.Item>
                              <Button
                                disabled={item?.disabled}
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                              >
                                Add New
                              </Button>
                            </Form.Item>
                            <Form.ErrorList errors={errors} />
                          </>
                        )}
                      </Form.List>
                    </>
                  )}
                  {item.type === "switch" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      <Switch
                        disabled={item?.disabled}
                        onChange={(e) =>
                          item?.onChange &&
                          item?.onChange(e, form.getFieldsValue())
                        }
                      />
                    </Form.Item>
                  )}
                  {item.type === "upload" && (
                    <Form.Item
                      name={item.name}
                      label={item.label}
                      rules={item.validation || null}
                    >
                      {files[item.name] &&
                        files[item.name]?.map((itm: any) => (
                          <div
                            key={Math.random()}
                            className="d-inline-block position-relative"
                          >
                            <div
                              className={s.close}
                              onClick={() => {
                                const filesClone = { ...files };
                                filesClone[item.name] = [];
                                setfiles(filesClone);
                              }}
                            >
                              x
                            </div>
                            <div
                              className={s.copy}
                              onClick={() => {
                                copyTextToClipboard(itm.path);
                              }}
                            >
                              <CopyOutlined />
                            </div>
                            <img
                              src={`${itm.path}`}
                              alt={`${itm.path}`}
                              style={{
                                width: 150,
                                margin: "0 5px 5px 0 ",
                                minHeight: 50,
                                background: "#eee",
                                border: "1px solid #ccc",
                              }}
                            />
                          </div>
                        ))}
                      <Upload
                        disabled={item?.disabled}
                        onChange={(e: any) => {
                          onUploadChange(e, item.name, item.isReplaceable);
                          item?.onChange &&
                            item?.onChange(e, form.getFieldsValue());
                        }}
                        uploadPreset={item?.uploadPreset}
                      >
                        <PlusOutlined /> Upload
                      </Upload>
                    </Form.Item>
                  )}
                </Col>
              ) : (
                <span key={i} />
              );
            })}
          </Row>

          {!formBuilder?.hideFormButtons && (
            <>
              <Divider style={{ border: "none" }}></Divider>
              <Row style={{ border: "none" }} className={s.sticky}>
                <Col span={24}>
                  <Form.Item className="text-right mt-4">
                    <Button
                      type="default"
                      color="default"
                      className="ml-2"
                      onClick={onCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="default"
                      className="ml-2"
                      onClick={() => {
                        setFileList([]);
                        if (isUpdate) {
                          form.setFieldsValue({ ...defaultValues });
                        } else {
                          form.resetFields();
                          // form.setFieldsValue({ ...defaultValues }) ;
                          setPlayBackUrl("");
                          setThumbnailPreview("");
                        }
                      }}
                    >
                      Reset
                    </Button>
                    <Button
                      loading={isSubmitLoading}
                      type="primary"
                      className="ml-2"
                      htmlType="submit"
                    >
                      {submitBtnText || "Submit"}
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}

          {formBuilder.buttonComponent}
        </Form>
      </div>
    </Spin>
  );
};

// @ts-ignore
export default memo(DynamicForm);
