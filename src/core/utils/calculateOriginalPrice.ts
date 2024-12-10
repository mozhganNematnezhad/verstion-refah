export function calculateOriginalPrice(cost: number, discount: number) {
  const discountAmount = (cost * discount) / 100;
  const discountedPrice = cost - discountAmount;

  return discountedPrice;
}
