import { useSelector } from 'react-redux'
import styled from 'styled-components'

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.product)
  return (
    <Wrapper>
      <h3 className='featured-title'>featured products</h3>
      <section className='products-wrapper'>
        {products
          .map((product) => {
            const { price, img, name, id } = product
            return (
              <article key={id} className='product'>
                <img src={img} alt={name} className='featured-img' />
                <div className='flex-wrapper'>
                  <h4>{name}</h4>
                  <h4>{price}$</h4>
                </div>
              </article>
            )
          })
          .slice(5, 8)}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .featured-title {
    margin: 3rem 0;
    text-align: center;
  }
  .featured-img {
    width: 350px;
    height: 250px;
    object-fit: cover;
    border: 2px solid var(--denim);
  }
  .products-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
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
