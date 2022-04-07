import { Product } from '../components'
import styled from 'styled-components'

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <section className='grid-container'>
        {products.map((product) => {
          const { id } = product

          return <Product key={id} {...product}></Product>
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }
`

export default GridView
