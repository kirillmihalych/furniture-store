import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { format_price } from '../../utils/helpers'

const Product = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <article>
        <Link to={`${id}`}>
          <img src={img} alt={name} className='grid-img' />
        </Link>
        <div className='flex-wrapper'>
          <h4>{name}</h4>
          <h4
            style={{
              color: 'black',
              background: '#eebc1d',
              padding: '0.1rem 0.2rem',
            }}
          >
            {format_price(price)}
          </h4>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .flex-wrapper {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .grid-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .grid-img:hover {
    transition: var(--transition);
    box-shadow: var(--shadow);
  }
`

export default Product
