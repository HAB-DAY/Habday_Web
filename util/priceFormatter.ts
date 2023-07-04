export default function priceFormatter(price: number): string {
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const totalPrice: string = price.toString();
  const formattedPrice: string = totalPrice.replace(priceRegex, ',');

  return formattedPrice;
}
