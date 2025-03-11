import { PaymentMethods } from '@/types/payment'

const paymentMethods: PaymentMethods[] = [
  {
    id: 1,
    name: 'Pix',
    fee: {
      1:{
        normal: 0,
        full: 0
      },
      2:{
        normal: 0,
        full: 0
      }
    }
  },
  {
    id: 2,
    name: 'Dinheiro',
    fee: {
      1:{
        normal: 0,
        full: 0
      },
      2:{
        normal: 0,
        full: 0
      }
    }
  },
  {
    id: 3,
    name: 'Crédito',
    fee:{
      1:{
        normal: 1,
        full: 3
      },
      2:{
        normal: 5,
        full: 5
      }
    }
  },
  {
    id: 4,
    name: 'Débito',
    fee:{
      1:{
        normal: 1,
        full: 0
      },
      2:{
        normal: 5,
        full: 5
      }
    }
  }
]
export { paymentMethods }
