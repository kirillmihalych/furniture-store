import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GridView, ListView } from '..'
import {
  setProducts,
  sortProducts,
  filterProducts,
} from '../../features/filterSlice'

const ProductList = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.product)
  const { gridView, filtered_products, sort, filters } = useSelector(
    (state) => state.filter
  )

  if (filtered_products.length < 1) {
    return (
      <h3 className='error-search'>
        Sorry!
        <br /> There is no matches.
        <br /> Try again please!
      </h3>
    )
  }

  return (
    <Wrapper>
      <section>
        {gridView ? (
          <GridView products={filtered_products} />
        ) : (
          <ListView products={filtered_products} />
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ProductList
