import styled from 'styled-components'
import это_мне_надо2 from '../assets/images/это_мне_надо2.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Wrapper>
      <div className='flex-wrapper center section-center'>
        <img src={это_мне_надо2} alt='img-about' />
        <h3 className='about-title'>Our story</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
          fugit suscipit. Dignissimos provident veritatis qui. Dolores incidunt
          sunt repellat autem dignissimos ipsa nihil a aliquid? Optio harum
          sapiente rerum quae quos beatae, dolorum, soluta voluptatibus,
          pariatur odit veniam rem provident aut? Qui labore enim animi corrupti
          ipsum excepturi obcaecati ratione!
        </p>
        <h3 className='about-link'>
          <Link to='products'>start shopping</Link>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 5rem 0;
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about-title {
    margin-top: 1rem;
    font-style: italic;
  }
  img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border: 3px solid var(--black);
  }
  p {
    letter-spacing: var(--spacing);
    margin-top: 1rem;
    text-align: center;
  }
  .about-link {
    border: 2px solid var(--notExactlyBlack);
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
  a {
    color: var(--notExactlyBlack);
  }
  .about-link:hover {
    cursor: pointer;
    background-color: var(--notExactlyBlack);
    transition: var(--transition);
    a {
      color: var(--notExactlyWhite);
    }
  }
  @media screen and (min-width: 992px) {
    img {
      width: 50%;
      height: 50%;
    }
  }
`

export default About
