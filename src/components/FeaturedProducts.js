import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { format_price } from '../utils/constants'

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.product)
  return (
    <Wrapper>
      <div className='featured-products'>
        <h2 className='featured-title'>
          Featured <span>products</span>
        </h2>
        <section className='products-wrapper'>
          {products
            .map((product) => {
              const { price, img, name, id } = product
              return (
                <article key={id} className='product'>
                  <Link to={`products/${id}`}>
                    <img src={img} alt={name} className='featured-img' />
                    <div className='flex-wrapper'>
                      <h4>{name}</h4>
                      <h4>{format_price(price)}</h4>
                    </div>
                  </Link>
                </article>
              )
            })
            .slice(5, 8)}
        </section>
        <h3 className='btn-featured-products'>
          <Link to='products'>show all</Link>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: lightgrey;
  padding-top: 1rem;
  .featured-products {
    width: 85vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .btn-featured-products {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 5rem;
  }
  .btn-featured-products a {
    color: var(--notExactlyBlack);
    background: var(--notExactlyWhite);
    border: 3px solid var(--notExactlyBlack);
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  .btn-featured-products:hover a {
    transition: var(--transition);
    background: var(--notExactlyBlack);
    color: var(--notExactlyWhite);
  }
  .featured-title {
    font-style: italic;
    margin-top: 7rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    background: black;
    color: var(--white);
    span {
      background: black;
      color: var(--white);
      border: 3px solid var(--white);
      padding: 0 0.5rem;
    }
  }
  .underline {
    border-bottom: 2px solid black;
  }
  .featured-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .products-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  .products-wrapper article {
    margin: 1rem 1rem;
  }
  .flex-wrapper {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  .product {
    box-shadow: var(--shadow);
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 992px) {
    .products-wrapper {
      flex-direction: column;
    }
  }
`

export default FeaturedProducts
