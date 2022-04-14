export const getUniqueValues = (items, name) => {
  let unique = items.map((item) => item[name])
  if (name === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

export const format_price = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}
