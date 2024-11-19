export interface Product {
  description: string;
  price: number;
}

//  // Teléfono con descripción y precio
//  const phone: Product = {
//   description: "Nokia",
//   price: 100,
// };

// // Tablet con descripción y precio
// const tablet: Product = {
//   description: "iPad Air",
//   price: 250,
// };

export interface TaxCalculatorOption {
  tax: number;
  products: Product[];
} 

//  function taxCalculator(option: TaxCalculatorOption): [number, number] {
// function taxCalculator({tax, products}: TaxCalculatorOption): [number, number] {
 export function taxCalculation(option: TaxCalculatorOption): [number, number] {
  const { tax, products } = option;

  let total = 0;
  products.forEach(({ price }: Product) => {
    total += price;
  });
  return [total, total * tax];
}

/* const shoppingCart = [phone, tablet]; */

/* const tax = 0.15; */

/* const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax,
}); */

/* console.log("Total:", total);
console.log("Tax:", totalTax);
 */

export {};
