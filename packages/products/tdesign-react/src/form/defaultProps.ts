/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormProps, TdFormItemProps, TdFormListProps } from './type';

export const formDefaultProps: TdFormProps = {
  colon: false,
  disabled: undefined,
  labelAlign: 'right',
  labelWidth: '100px',
  layout: 'vertical',
  preventSubmitDefault: true,
  requiredMark: undefined,
  resetType: 'empty',
  scrollToFirstError: '',
  showErrorMessage: true,
  statusIcon: undefined,
  submitWithWarningMessage: false,
};

export const formItemDefaultProps: TdFormItemProps = {
  label: '',
  requiredMark: undefined,
  showErrorMessage: undefined,
  statusIcon: undefined,
  successBorder: false,
};

export const formListDefaultProps: TdFormListProps = { initialData: [] };
