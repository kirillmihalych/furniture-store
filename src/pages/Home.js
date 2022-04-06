import styled from 'styled-components'
import img from '../assets/img.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Wrapper>
      <div
        className='center'
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat cover',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <h2>
          Build your
          <br /> comfort zone
        </h2>
        <h3>
          <Link to='products'>start shopping</Link>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  a {
    color: var(--notExactlyWhite);
  }
  h2 {
    text-align: center;
    color: var(--notExactlyWhite);
  }
  h3 {
    border: 2px solid var(--notExactlyWhite);
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
  h3:hover {
    cursor: pointer;
    background: black;
    transition: var(--transition);
  }
  img {
    object-fit: cover;
  }
`

export default Home
