import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../features/productSlice'
import { single_product_url } from '../utils/constants'
import { Stars, AddToCart, LoadingSpinner } from '../components'
import { format_price } from '../utils/constants'

const SingleProduct = () => {
  const { single_product, isLoading } = useSelector((state) => state.product)
  const { name, img, price, desc, company, category, stars, reviews, stock } =
    single_product
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSingleProduct(`${single_product_url}${id}`))
  }, [id])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper className='center section-center'>
      <section className='single-page-wrapper'>
        <article className='images'>
          <img src={img} alt={name} />
        </article>
        <article>
          <h3 className='title-name'>{name}</h3>
          <Stars stars={stars} reviews={reviews} />
          <h4 className='price'>{format_price(price)}</h4>
          <p className='desc'>{desc}</p>
          <p className='info'>
            <span> brand:</span>
            {company}
          </p>
          <p className='info'>
            <span>Available : </span>
            {stock > 0 ? 'In stock' : 'out of stock'}
          </p>

          <hr />
          {stock > 0 ? (
            <AddToCart product={single_product} />
          ) : (
            `this item unavailable`
          )}
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  place-items: center;
  .title-name {
    margin-bottom: 0.65rem;
  }
  .price {
    display: inline-block;
    color: #ffd700;
    background: black;
    padding: 0.1rem 0.2rem;
  }
  .single-page-wrapper {
    display: grid;
    gap: 2rem;
  }
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    border: 2px solid var(--denim);
  }
  .desc {
    letter-spacing: var(--spacing);
    font-size: 0.875rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 977px) {
    .single-page-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 5rem;
      margin-top: 5rem;
    }
    img {
      width: 85vw;
      height: 550px;
      object-fit: cover;
      border: 3px solid var(--black);
    }
    /* .info {
      display: grid;
      place-items: center;
      gap: 1rem;
      margin-bottom: 5rem;
    } */
  }
`

export default SingleProduct
