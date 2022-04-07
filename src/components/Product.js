import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Product = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <article>
        <Link to={`${id}`}>
          <img src={img} alt={name} className='grid-img' />
        </Link>
        <div className='flex-wrapper'>
          <h4>{name}</h4>
          <h4>{price}$</h4>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .flex-wrapper {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  .grid-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`

export default Product
