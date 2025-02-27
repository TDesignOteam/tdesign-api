/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDatePickerProps, TdDateRangePickerProps, TdDatePickerPanelProps, TdDateRangePickerPanelProps } from './type';

export const datePickerDefaultProps: TdDatePickerProps = {
  allowInput: false,
  borderless: false,
  clearable: false,
  defaultTime: '00:00:00',
  disabled: undefined,
  enableTimePicker: false,
  format: undefined,
  mode: 'date',
  multiple: false,
  needConfirm: true,
  placeholder: undefined,
  presetsPlacement: 'bottom',
  size: 'medium',
  status: 'default',
  defaultValue: '',
};

export const dateRangePickerDefaultProps: TdDateRangePickerProps = {
  allowInput: false,
  borderless: false,
  cancelRangeSelectLimit: false,
  clearable: false,
  defaultTime: ['00:00:00', '23:59:59'],
  disabled: undefined,
  enableTimePicker: false,
  mode: 'date',
  needConfirm: true,
  panelPreselection: true,
  presetsPlacement: 'bottom',
  size: 'medium',
  status: 'default',
  defaultValue: [],
};

export const datePickerPanelDefaultProps: TdDatePickerPanelProps = { defaultTime: '00:00:00' };

export const dateRangePickerPanelDefaultProps: TdDateRangePickerPanelProps = { defaultTime: ['00:00:00', '23:59:59'] };
