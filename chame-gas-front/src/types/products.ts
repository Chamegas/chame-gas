import { dateInputProps, radioInputProps } from './inputs'
export type ProductMain = {
  id: number
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

export type ProductMainData = {
  id: number
  isComplete: boolean
  validity: string | null
}

export type ProductData = ProductMainData & {
  name: string
  price: number
}
