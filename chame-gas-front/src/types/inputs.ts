export interface LabelProps {
  isRequired: boolean
  id?: string | null
  labelText: string
}

export type radioInputProps = LabelProps & {
  labelValues: Array<string | number>
  options: Array<string | number | boolean>
  markedOption: string | number | boolean
  checkName: string
}

export type dateInputProps = LabelProps & {
  dateType: 'date' | 'month' | 'datetime-local'
  value: string | null
  errorMessage: string
  minDate?: string | null
  maxDate?: string | null
}

export type textInputProps = LabelProps & {
  value: string
  type: 'text' | 'textarea'
  placeholder?: string
  isDisabled?: boolean | null
}

export type selectInputProps = LabelProps & {
  options: Array<string | number | boolean>
  labelValues: Array<string | number>
  selectedOption: string | number | boolean
  selectName: string
  isDisabled?: boolean | null
}
