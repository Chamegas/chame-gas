import { PaymentMethods } from '@/types/payment'

const paymentMethods: PaymentMethods[] = [
  {
    id: 1,
    name: 'Pix',
    fee: 0
  },
  {
    id: 2,
    name: 'Dinheiro',
    fee: 0
  },
  {
    id: 3,
    name: 'Crédito',
    fee: 0.04
  },
  {
    id: 4,
    name: 'Débito',
    fee: 0.02
  }
]

export { paymentMethods }
