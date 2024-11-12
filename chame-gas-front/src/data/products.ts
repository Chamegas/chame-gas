import { ProductFormType, ProductMain } from '@/types/products'
import AguaProductImg from '@/assets/imgs/products/aguaMineral.jpg'
import GasProductImg from '@/assets/imgs/products/gasCozinha.jpg'
import { radioInputProps } from '@/types/inputs'
import { waterDateValidityGetMaxDate, waterDateValidityGetMinDate } from '@/utils/waterDateValidity'

const productRadio: radioInputProps = {
  labelValues: ['Sim', 'Não'],
  options: [true, false],
  markedOption: true,
  checkName: 'hasRefill',
  id: 'hasRefill',
  labelText: 'Possui vasilhame para recarga ?',
  isRequired: true
}

const ProductsMainIndex: ProductMain[] = [
  {
    id: 1,
    title: 'Água',
    description: 'Galão de Água 20 litros',
    image: AguaProductImg,
    imageAlt: 'Galão de Água 20 litros'
  },
  {
    id: 2,
    title: 'Gás',
    description: 'Gás de cozinha GLP 13Kg',
    image: GasProductImg,
    imageAlt: 'Gás de cozinha GLP 13Kg'
  }
]

const ProductsForm: ProductFormType[] = [
  {
    productInfo: ProductsMainIndex[0],
    radioInput: productRadio,
    dateInput: {
      dateType: 'month',
      maxDate: waterDateValidityGetMaxDate(),
      minDate: waterDateValidityGetMinDate(),
      value: null,
      errorMessage: 'Vasilhame vencido ou data inválida',
      id: 'validity',
      labelText: 'Qual a validade do vasilhame ?',
      isRequired: true
    },
    price: 13,
    fullPrice: 50
  },
  {
    productInfo: ProductsMainIndex[1],
    radioInput: productRadio,
    dateInput: null,
    price: 120,
    fullPrice: 370
  }
]

export { ProductsMainIndex, ProductsForm }
