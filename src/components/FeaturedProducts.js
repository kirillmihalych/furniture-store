import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.product)
  return (
    <Wrapper>
      <h2 className='featured-title'>featured products</h2>
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
                    <h4>{price}$</h4>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 85vw;
  max-width: 1170px;
  margin: 0 auto;
  .btn-featured-products {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 5rem;
    margin-bottom: 17rem;
  }
  .btn-featured-products a {
    color: var(--notExactlyWhite);
    background: var(--notExactlyBlack);
    padding: 0.5rem 1rem;
  }
  .btn-featured-products:hover a {
    transition: var(--transition);
    border: 2px solid var(--notExactlyBlack);
    background: var(--notExactlyWhite);
    color: var(--notExactlyBlack);
  }
  .featured-title {
    margin-top: 10rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .featured-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border: 2px solid var(--denim);
  }
  .products-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    /* display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem; */
  }
  .products-wrapper article {
    margin: 1rem 1rem;
  }

  .flex-wrapper {
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
  }
  @media screen and (max-width: 992px) {
    .products-wrapper {
      flex-direction: column;
    }
  }
`

export default FeaturedProducts
