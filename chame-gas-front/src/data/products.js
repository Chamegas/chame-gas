import AguaProductImg from '@/assets/imgs/products/aguaMineral.jpg';
import GasProductImg from '@/assets/imgs/products/gasCozinha.jpg';
import { waterDateValidityGetMaxDate, waterDateValidityGetMinDate } from '@/utils/waterDateValidity';
const productRadio = {
    labelValues: ['Sim', 'Não'],
    options: [true, false],
    markedOption: true,
    checkName: 'hasRefill',
    id: 'hasRefill',
    labelText: 'Possui vasilhame para recarga ?',
    isRequired: true
};
const ProductsMainIndex = [
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
];
const ProductsForm = [
    {
        productInfo: ProductsMainIndex[0],
        radioInput: productRadio,
        dateInput: {
            dateType: 'month',
            maxDate: waterDateValidityGetMaxDate(),
            minDate: waterDateValidityGetMinDate(),
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
];
export { ProductsMainIndex, ProductsForm };
