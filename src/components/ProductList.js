import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { GridView, ListView } from '../components'

const ProductList = () => {
  const { products } = useSelector((state) => state.product)
  const { gridView } = useSelector((state) => state.filter)
  return (
    <Wrapper>
      <section>
        {gridView ? (
          <GridView products={products} />
        ) : (
          <ListView products={products} />
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProductList
