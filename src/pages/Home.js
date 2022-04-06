import styled from 'styled-components'
import img from '../assets/img.jpg'
import { Link } from 'react-router-dom'
import { FeaturedProducts, Services, NewsForm } from '../components'

const Home = () => {
  return (
    <Wrapper>
      <div
        className='center home'
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat cover',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <h2 className='home-title'>
          Build your
          <br /> comfort zone
        </h2>
        <h3 className='shopping-btn'>
          <Link to='products' className='home-link'>
            start shopping
          </Link>
        </h3>
      </div>
      <FeaturedProducts />
      <Services />
      <NewsForm />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .home-link {
    color: var(--notExactlyWhite);
  }
  .home-title {
    text-align: center;
    color: var(--notExactlyWhite);
  }
  .shopping-btn {
    border: 2px solid var(--notExactlyWhite);
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
  .shopping-btn:hover {
    cursor: pointer;
    background: black;
    transition: var(--transition);
  }
  img {
    object-fit: cover;
  }
`

export default Home
