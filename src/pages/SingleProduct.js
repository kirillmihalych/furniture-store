import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../features/productSlice'
import { single_product_url } from '../utils/constants'
import { Stars } from '../components'

const SingleProduct = () => {
  const { single_product } = useSelector((state) => state.product)
  const { name, img, price, desc, company, category, stars, reviews } =
    single_product
  const { colors = [] } = single_product
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSingleProduct(`${single_product_url}${id}`))
  }, [id])
  return (
    <Wrapper className='center section-center'>
      <section className='single-page-wrapper'>
        <article className='images'>
          <img src={img} alt={name} />
          <Stars stars={stars} reviews={reviews} />
        </article>
        <article className='info'>
          <h1>{name}</h1>
          <h3>price: {price}$</h3>
          <h3>company: {company}</h3>
          <h3>category: {category}</h3>
          <h3>colors :</h3>
          <div className='colors'>
            {colors.map((color) => {
              return (
                <p
                  className='color'
                  key={color}
                  style={{ background: color }}
                ></p>
              )
            })}
          </div>
          <p className='desc'>{desc}</p>
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  .single-page-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border: 2px solid var(--denim);
  }
  .colors {
    margin: 1rem 0;
  }
  .color {
    display: inline-block;
    border: 2px solid black;
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
  }
  .desc {
    letter-spacing: var(--spacing);
  }
  @media screen and (max-width: 800px) {
    .single-page-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 5rem;
      margin-top: 5rem;
    }
    .info {
      display: grid;
      place-items: center;
      gap: 1rem;
      margin-bottom: 5rem;
    }
  }
`

export default SingleProduct
