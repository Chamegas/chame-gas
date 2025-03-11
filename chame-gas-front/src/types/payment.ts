type PaymentMethods = {
  id: number
  name: string
  fee: PaymentFee
}

type PaymentFee = {
  [key: number]: {
    normal: number
    full: number
  }
}


export { PaymentMethods, PaymentFee }
