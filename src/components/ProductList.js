import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { GridView, ListView } from '../components'

const ProductList = () => {
  const { products } = useSelector((state) => state.product)
  return (
    <Wrapper>
      <section>
        <ListView products={products} />
        {/* <GridView products={products} /> */}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProductList
