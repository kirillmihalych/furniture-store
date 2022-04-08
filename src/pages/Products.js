import styled from 'styled-components'
import { ProductList, Filters, Sort } from '../components'

const Products = () => {
  return (
    <Wrapper className='section-center'>
      <section className='products-page'>
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 5rem auto;
  .products-page {
    display: grid;
    grid-template-columns: 150px auto;
    column-gap: 2rem;
  }
  @media screen and (max-width: 767px) {
    .products-page {
      grid-template-columns: 1fr;
    }
  }
`

export default Products
