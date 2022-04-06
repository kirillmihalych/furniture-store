import styled from 'styled-components'
import это_мне_надо2 from '../assets/это_мне_надо2.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Wrapper>
      <div className='flex-wrapper center section-center'>
        <img src={это_мне_надо2} alt='img-about' />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          aperiam aliquam laboriosam doloremque quaerat amet eaque laudantium,
          dolorum non architecto blanditiis eligendi pariatur harum repudiandae
          eius! Quod doloremque nesciunt similique!
        </p>
        <h3>
          <Link to='products'>start shopping</Link>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    width: 75%;
    height: 75%;
    object-fit: cover;
    border: 5px solid var(--denim);
    border-radius: 10px;
  }
  p {
    letter-spacing: var(--spacing);
    margin-top: 1rem;
    text-align: center;
  }
  h3 {
    border: 2px solid var(--notExactlyBlack);
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
  a {
    color: var(--notExactlyBlack);
  }
  h3:hover {
    background-color: var(--notExactlyBlack);
    transition: var(--transition);
    a {
      color: var(--notExactlyWhite);
    }
  }
`

export default About
