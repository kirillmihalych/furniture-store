import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <section className='list-container'>
        {products.map((product) => {
          const { id, img, price, name, desc } = product
          return (
            <article key={id} className='product'>
              <img src={img} alt={name} className='list-img' />
              <div className='info'>
                <h3 className='list-title'>{name}</h3>
                <h4 className='list-price'>{price}$</h4>
                <p className='desc'>{desc.slice(0, 125)}...</p>
                <h4>
                  <Link to={`${id}`} className='list-link'>
                    view more
                  </Link>
                </h4>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .list-img {
    width: 100%;
    display: block;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  .list-link {
    padding: 0.25rem 0.5rem;
    color: var(--black);
    border: 3px solid var(--black);
  }
  .list-link:hover {
    transition: var(--transition);
    background: var(--black);
    color: var(--white);
  }
  .product {
    margin-bottom: 2rem;
  }
  .desc {
    color: #a9a9a9;
  }
  .info h3,
  h4 {
    margin-bottom: 0.5rem;
  }
  .list-price {
    display: inline-block;
    color: #ffd700;
    padding: 0.1rem 0.2rem;
    background: black;
  }
  .list-title {
    font-style: italic;
  }
  @media screen and (min-width: 992px) {
    .product {
      display: grid;
      grid-template-columns: 260px 1fr;
      place-items: center;
      column-gap: 3rem;
      margin-bottom: 3rem;
    }
  }
`

export default ListView
