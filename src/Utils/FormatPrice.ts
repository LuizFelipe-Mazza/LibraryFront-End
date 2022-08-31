export function FormatPrice(value: number) {
  const valueFormated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
  return valueFormated
}
