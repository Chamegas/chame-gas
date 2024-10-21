import { dateInputProps, radioInputProps } from './inputs'
export type ProductMain = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export type ProductFormType = {
  productInfo: ProductMain
  radioInput: radioInputProps
  dateInput: dateInputProps | null
  price: number
  fullPrice: number
}
