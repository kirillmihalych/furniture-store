import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { FaBars } from '../assets/icons'
import ButtonsContainer from './ButtonsContainer'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../features/productSlice'

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <nav>
        <div className='nav-title'>
          <h2>furniture</h2>
          <button
            className='toggle-btn'
            onClick={() => {
              dispatch(openSidebar())
            }}
          >
            <FaBars />
          </button>
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
        <ButtonsContainer />
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
  .toggle-btn {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
  }
  .toggle-btn:hover {
    transition: var(--transiton);
    color: var(--darkGrey);
  }
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
  @media screen and (min-width: 982px) {
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
