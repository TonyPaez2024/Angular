console.log('07-import-export');
import {Product, taxCalculation} from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Phone',
        price: 100
    },
    {
        description: 'Mouse',
        price: 10
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);