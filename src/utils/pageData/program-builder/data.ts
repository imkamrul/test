import moment from 'moment'
import { IFormBuilder } from '../../../core/components/Form/Form.types'
import { TablePropTypes } from '../../../core/components/Table/Table.types'
import { academicProgramClasses, examYear, programDurationTypes } from '../../commonStaticData'

export const tableSettings: TablePropTypes = {
  title: 'Programs Table',
  columns: [
    {
      title: 'Serial',
      key: 'serial',
      type: 'number',
      isVisible: true,
      alwaysVisible: false,
      width: 100,
    },
    {
      title: 'Program ID',
      key: 'id',
      type: 'copyable',
      isVisible: true,
      alwaysVisible: false,
      ellipsis: true,
      width: 200,
    },
    {
      title: 'Program Name (English)',
      key: 'title',
      isVisible: true,
      alwaysVisible: false,
      width: 200,
      sorter: (a: any, b: any) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      },
    },
    {
      title: 'Program Name (Bangla)',
      key: 'title_bn',
      isVisible: true,
      alwaysVisible: false,
      width: 200,
    },
    {
      title: 'Slug',
      key: 'slug',
      isVisible: false,
      alwaysVisible: false,
      width: 200,
    },
    {
      title: 'Class',
      key: 'class',
      isVisible: true,
      alwaysVisible: false,
      width: 200,
    },
  ],
  hasRowActions: true,
  hasAddNewBtn: true,
  addNewBtnTitle: 'Add New',
  // isServersidePagination: true,
  hasBulkOperation: false,
  bulkActions: [
    {
      title: 'Delete',
      action: 'delete',
      btnType: 'primary',
      isDanger: true,
      btnIcon: '',
      btnClass: 'btn',
    },
  ],
}

export const getFormBuilderData = (
  programSubjects: any,
  courseTeachers: any,
  startDate: any
): IFormBuilder => ({
  title: '',
  hideTitle: true,
  stickyMenu: true,
  hideFormButtons: false,
  layout: 'vertical',
  controls: [
    {
      label: 'Serial',
      type: 'number',
      name: 'serial',
      placeHolder: 'Serial',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter a serial number',
        },
      ],
    },
    {
      label: 'Program Title (English)',
      type: 'text',
      name: 'title',
      placeHolder: 'Enter title in English',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter the english title',
        },
      ],
    },
    {
      label: 'Program Title (Bangla)',
      type: 'text',
      name: 'title_bn',
      placeHolder: 'Enter title in Bangla',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter the bangla title',
        },
      ],
    },
    {
      label: 'Description',
      type: 'textarea',
      name: 'description',
      placeHolder: 'Description',
      maxLength: 1000,
      showCount: true,
      colSpan: 12,
      active: true,
    },
    {
      label: 'Short Description',
      type: 'textarea',
      name: 'short_description',
      placeHolder: 'Short Description',
      maxLength: 200,
      showCount: true,
      colSpan: 12,
      active: true,
    },
    {
      label: 'Program Class',
      type: 'select',
      name: 'class',
      placeHolder: 'Select Program Class',
      options: academicProgramClasses,
      validation: [
        {
          required: true,
          message: 'Please select a class',
        },
      ],
      colSpan: 12,
      active: true,
    },
    {
      label: 'Program Subjects',
      type: 'select-multiple',
      name: 'subject_ids',
      options: programSubjects,
      placeHolder: 'Select Subjects',
      validation: [
        {
          required: true,
          message: 'Please select subjects',
        },
      ],
      disabled: programSubjects.length > 0 ? false : true,
      colSpan: 12,
      active: true,
    },
    {
      label: 'Slug',
      type: 'text',
      name: 'slug',
      placeHolder: 'Slug',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please input slug',
        },
      ],
    },
    {
      label: 'Tag Teachers',
      type: 'select-multiple',
      name: 'teachers',
      placeHolder: 'Tag Teachers',
      options: courseTeachers,
      validation: [
        {
          required: true,
          message: 'Please select course teacher.',
        },
      ],
      colSpan: 12,
      active: true,
    },
    {
      label: 'Duration Type',
      type: 'select',
      name: 'course_duration_type',
      options: programDurationTypes,
      placeHolder: 'Select duration type',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please select a duration type',
        },
      ],
    },
    {
      label: 'Banner URL',
      type: 'upload',
      name: 'banner_url',
      placeHolder: 'Banner URL',
      colSpan: 12,
      active: true,
    },

    {
      label: 'Title Video URL',
      type: 'text',
      name: 'title_video',
      placeHolder: 'Title Video URL',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Title Video Thumbnail',
      type: 'upload',
      name: 'title_video_thumbnail',
      placeHolder: 'Title Video Thumbnail',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Class Routine Downloadable URL (PDF)',
      type: 'upload',
      name: 'class_routine_downloadable_url',
      placeHolder: 'Class Routine Dowmloadable URL',
      colSpan: 12,
      active: true,
      uploadPreset: 'pdfOnly',
    },
    {
      label: 'Class Routine Image URL',
      type: 'upload',
      name: 'class_routine_image_url',
      placeHolder: 'Class Routine Image URL',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Cover Photo',
      type: 'upload',
      name: 'cover_photo',
      placeHolder: 'Cover Photo',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Cover Photo Responsive',
      type: 'upload',
      name: 'cover_photo_responsive',
      placeHolder: 'Cover Photo Responsive',
      colSpan: 12,
      active: true,
    },

    {
      label: 'Learning Path Image URL',
      type: 'upload',
      name: 'learning_path_image_url',
      placeHolder: 'Learning Path Image URL',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Facebook Group URL',
      type: 'text',
      name: 'facebook_group_url',
      placeHolder: 'Facebook Group URL',
      colSpan: 12,
      active: true,
    },
    {
      label: 'Exam Year',
      type: 'select',
      name: 'exam_year',
      placeHolder: 'Select Exam Year',
      options: examYear,
      colSpan: 12,
      active: true,
    },
    {
      label: 'Sales Enabled',
      type: 'select',
      name: 'sales_enabled',
      placeHolder: 'Select sales enabled',
      options: [
        {
          label: 'True',
          value: true,
        },
        {
          label: 'False',
          value: false,
        },
      ],
      colSpan: 6,
      active: true,
    },
    {
      label: 'Is Active',
      type: 'select',
      name: 'is_active',
      placeHolder: 'Is Active',
      options: [
        {
          label: 'True',
          value: true,
        },
        {
          label: 'False',
          value: false,
        },
      ],
      colSpan: 6,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please select whether true or false',
        },
      ],
    },

    {
      label: 'Expired',
      type: 'select',
      name: 'expired',
      placeHolder: 'Expired',
      options: [
        {
          label: 'True',
          value: true,
        },
        {
          label: 'False',
          value: false,
        },
      ],
      colSpan: 6,
      active: true,
    },
    {
      label: 'Start Date',
      type: 'datePicker',
      name: 'start_date',
      showTime: true,
      colSpan: 8,
      disabled: false,
      active: true,
      disabledDate: (current) => {
        return current && current < moment().subtract(1, 'days')
      },
      validation: [
        {
          required: true,
          message: 'Please select start date.',
        },
      ],
    },
    {
      label: 'End Date',
      type: 'datePicker',
      name: 'end_date',
      showTime: true,
      colSpan: 8,
      // disabled: startDate ? false : true,
      active: true,
      disabledDate: (current) => {
        return current && current < startDate
      },
      validation: [
        {
          required: true,
          message: 'Please select end date',
        },
      ],
    },
    { type: 'divider', label: 'PRICING', name: 'd1', active: true },
    {
      label: 'Sales Full Price',
      type: 'number',
      name: 'sale_price_full',
      placeHolder: 'Sales Full Price',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter sales full price',
        },
      ],
    },
    {
      label: 'Sales Quarterly Price',
      type: 'number',
      name: 'sale_price_quarterly',
      placeHolder: 'Sales Quarterly Price',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter sales quarterly price',
        },
      ],
    },
    {
      label: 'Quarterly Increase Price',
      type: 'number',
      name: 'quarterly_increase_price',
      placeHolder: 'Quarterly Increase Price',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter quarterly increase price',
        },
      ],
    },
    {
      label: 'Quarterly Decrease Price',
      type: 'number',
      name: 'quarterly_decrease_price',
      placeHolder: 'Quarterly Decrease Price',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter quarterly decrease price',
        },
      ],
    },
    {
      label: 'Discount Percentage',
      type: 'number',
      name: 'discount_percentage',
      placeHolder: 'Discount Percentage',
      colSpan: 12,
      active: true,
      validation: [
        {
          required: true,
          message: 'Please enter discount percentage',
        },
      ],
      maxNumber: 80,
    },

    { type: 'divider', label: 'SEO METADATA', name: 'd2', active: true },
    {
      label: 'SEO Meta Title',
      type: 'text',
      name: 'seo_title',
      placeHolder: 'SEO Meta Title',
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO Meta Keywords',
      type: 'text',
      name: 'seo_key_words',
      placeHolder: 'SEO Meta Keywords',
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO Meta Description',
      type: 'text',
      name: 'seo_description',
      placeHolder: 'SEO Meta Description',
      maxLength: 164,
      showCount: true,
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO OG Description (Bangla)',
      type: 'text',
      name: 'seo_og_description_bn',
      placeHolder: 'SEO OG Description',
      maxLength: 164,
      showCount: true,
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO OG Title',
      type: 'text',
      name: 'seo_og_title',
      placeHolder: 'OG Title',
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO OG Title (Bangla)',
      type: 'text',
      name: 'seo_og_title_bn',
      placeHolder: 'OG Title (Bangla)',
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO Canonical URL',
      type: 'text',
      name: 'seo_canonical',
      placeHolder: 'SEO Canonical',
      colSpan: 12,
      active: true,
    },
    {
      label: 'SEO OG Image',
      type: 'upload',
      name: 'seo_og_img',
      placeHolder: 'SEO OG Image',
      colSpan: 24,
      active: true,
    },
  ],
})

export const getAcademicProgramsFilterData = (): IFormBuilder => ({
  title: 'Filter Courses',
  hideTitle: true,
  size: 'middle',
  hideFormButtons: true,
  controls: [
    {
      label: 'Class',
      type: 'select',
      name: 'class',
      options: academicProgramClasses,
      colSpan: 8,
      active: true,
      placeHolder: 'Select Class',
      defaultValue: 'Select Class',
    },
  ],
})

export const processData = (data: any): any => {
  return {
    banner_url: data?.banner_url && [{ path: data?.banner_url }],
    class:
      data?.class === 'C9'
        ? 'Class 9'
        : data?.class === 'C10'
        ? 'Class 10'
        : data?.class === 'C11'
        ? 'Class 11'
        : data?.class === 'C12'
        ? 'Class 12'
        : data?.class,
    serial: data?.serial,
    title: data?.title,
    title_bn: data?.title_bn,
    title_video: data?.title_video,
    class_routine_image_url: data?.class_routine_image_url && [
      { path: data?.class_routine_image_url },
    ],
    // mobile_responsive_routine: data?.mobile_responsive_routine && [
    //   { path: data?.mobile_responsive_routine },
    // ],
    class_routine_downloadable_url: data?.class_routine_downloadable_url && [
      { path: data?.class_routine_downloadable_url },
    ],
    learning_path_image_url: data?.learning_path_image_url && [
      { path: data?.learning_path_image_url },
    ],
    facebook_group_url: data?.facebook_group_url,
    title_video_thumbnail: data?.title_video_thumbnail && [{ path: data?.title_video_thumbnail }],
    cover_photo: data?.cover_photo && [{ path: data?.cover_photo }],
    cover_photo_responsive: data?.cover_photo_responsive && [
      { path: data?.cover_photo_responsive },
    ],
    start_date: data?.start_date ? moment(data.start_date) : null,
    end_date: data?.end_date ? moment(data.end_date) : null,
    subject_ids: data?.subjects?.map((s: any) => {
      return s?.code
    }),
    description: data?.description,
    seo_description: data?.seo_description,
    short_description: data?.short_description,
    course_duration_type: data?.course_duration_type,
    seo_canonical: data?.seo_canonical,
    seo_key_words: data?.seo_key_words,
    seo_og_description_bn: data?.seo_og_description_bn,
    seo_og_img: data?.seo_og_img && [{ path: data?.seo_og_img }],
    seo_title: data?.seo_title,
    seo_og_title: data?.seo_og_title,
    seo_og_title_bn: data?.seo_og_title_bn,
    slug: data?.slug,
    exam_year: data?.exam_year || 'Not Specified',
    sales_enabled:
      data?.sales_enabled === true
        ? 'True'
        : data?.sales_enabled === false
        ? 'False'
        : 'Not Specified',
    is_active:
      data?.is_active === true ? 'True' : data?.is_active === false ? 'False' : 'Not Specified',
    expired: data?.expired === true ? 'True' : data?.expired === false ? 'False' : 'Not Specified',
    sale_price_full: data?.pricing?.sale_price_full,
    sale_price_quarterly: data?.pricing?.sale_price_quarterly,
    quarterly_increase_price: data?.pricing?.quarterly_increase_price,
    quarterly_decrease_price: data?.pricing?.quarterly_decrease_price,
    discount_percentage: data?.pricing?.discount_percentage,
    teachers: data?.teachers?.map((t: any) => t.id),
  }
}
