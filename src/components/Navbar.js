import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className='nav-title'>
          <h2>furniture</h2>
          <button className='toggle-btn'>toggle</button>
        </div>
        <div className='nav-links'>
          {links.map(({ id, url, name }) => {
            return (
              <Link to={url} key={id}>
                {name}
              </Link>
            )
          })}
        </div>
        <div className='btn-container'>
          <button>cart</button>
          <button>sign up</button>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5rem;
  background: var(--notExatclyWhite);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  .nav-links {
    display: none;
  }
  .btn-container {
    display: none;
  }
  nav {
    min-width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .nav-title {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 882px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-links a {
      margin-left: 2rem;
      font-size: 1.25rem;
      color: var(--noxExactlyBlack);
    }
    .nav-links a:hover {
      transition: var(--transiton);
      color: var(--denim);
    }
    .btn-container {
      display: block;
    }
    nav {
      display: grid;
      grid-template-columns: auto 1fr auto;
      place-items: center;
    }
  }
`

export default Navbar
