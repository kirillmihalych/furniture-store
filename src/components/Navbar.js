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
          <h3>
            <Link to='/'>furniture</Link>
          </h3>
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
              <Link to={url} key={id} className='nav-single-link'>
                <h4>{name}</h4>
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
  height: 4rem;
  background: var(--notExatclyWhite);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  a {
    color: var(--noxExactlyBlack);
  }
  .toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.5rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
  }
  .toggle-btn:hover {
    transition: var(--transiton);
    background: lightgrey;
    border-radius: 5px;
  }
  .nav-links {
    display: none;
    text-transform: capitalize;
    font-weight: bold;
  }
  .nav-single-link {
    border-bottom: 3px solid transparent;
  }
  .nav-single-link:hover {
    transition: var(--transiton);
    border-bottom: 3px solid var(--black);
  }
  .btns-container {
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
    align-items: center;
    h3 {
      background: var(--black);
      color: var(--white);
      padding: 0.25rem 0.5rem;
    }
  }
  @media screen and (min-width: 772px) {
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
    .btns-container {
      display: flex;
    }
    nav {
      display: grid;
      grid-template-columns: auto 1fr auto;
      place-items: center;
    }
  }
`

export default Navbar
