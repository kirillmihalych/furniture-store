import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FeaturedProducts, Services, NewsForm } from '../components'
import img1 from '../assets/hero-img-cat.jpg'
import img2 from '../assets/hero-img-girl.jpg'

const Home = () => {
  return (
    <Wrapper>
      <div className='center section-center home'>
        <div className='title-wrapper'>
          <h2 className='home-title'>
            Build your
            <br /> comfort zone
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            quaerat debitis exercitationem voluptate. Inventore maiores deleniti
            saepe modi. Nam, nesciunt.
          </p>
          <h3 className='shopping-btn'>
            <Link to='products' className='home-link'>
              start shopping
            </Link>
          </h3>
        </div>
        <div className='img-container'>
          <img src={img2} alt='girl-img' className='main-img' />
          <img src={img1} alt='cat-img' className='accent-img' />
        </div>
      </div>
      <FeaturedProducts />
      <Services />
      <NewsForm />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home {
    min-height: 60vh;
    display: grid;
    place-items: center;
  }
  .img-container {
    display: none;
  }
  h2 {
    line-height: 2.5rem;
    margin: 1rem 0;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .shopping-btn {
    display: inline-block;
    border: 3px solid var(--notExactlyBlack);
    border-radius: 5px;
    padding: 1rem 2rem;
  }
  .shopping-btn:hover {
    cursor: pointer;
    background: var(--black);
    transition: var(--transition);
    .home-link {
      transition: var(--transition);
      color: var(--white);
    }
  }
  .home-link {
    color: var(--notExactlyBlack);
  }
  @media (min-width: 677px) {
    .home {
      height: calc(100vh - 5rem);
      grid-template-columns: 1fr 1fr;
      gap: 8rem;
    }
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .shopping-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--darkGrey);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Home
