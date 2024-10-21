import { ProductFormType, ProductMain } from '@/types/products'
import AguaProductImg from '@/assets/imgs/products/aguaMineral.jpg'
import GasProductImg from '@/assets/imgs/products/gasCozinha.jpg'
import { radioInputProps } from '@/types/inputs'

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
    title: 'Água',
    description: 'Galão de Água 20 litros',
    image: AguaProductImg,
    imageAlt: 'Galão de Água 20 litros'
  },
  {
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
      value: null,
      errorMessage: 'Vasilhame vencido! Recarga não disponível',
      id: 'validity',
      labelText: 'Qual a validade do vasilhame ?',
      isRequired: true
    },
    price: 12,
    fullPrice: 30
  },
  {
    productInfo: ProductsMainIndex[1],
    radioInput: productRadio,
    dateInput: null,
    price: 70,
    fullPrice: 90
  }
]

export { ProductsMainIndex, ProductsForm }
