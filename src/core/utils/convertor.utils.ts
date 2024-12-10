export function ConvertToSepratorNumber(number: number | bigint) {
  const numberString = Number(number).toString();
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}
