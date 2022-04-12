export const all_products_url =
  'https://furniture-serverless-func.netlify.app/api/all_products'

export const single_product_url =
  'https://furniture-serverless-func.netlify.app/api/single_product?id='

export const format_price = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const links = [
  {
    id: 1,
    url: 'products',
    name: 'products',
  },
  {
    id: 2,
    url: 'about',
    name: 'about',
  },
]
