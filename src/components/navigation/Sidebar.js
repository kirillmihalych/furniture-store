import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../../utils/constants'
import { ButtonsContainer } from '../index'
import { MdClose } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../../features/productSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((state) => state.product)

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'show-sidebar' : null}>
        <div className='sidebar-title section-center'>
          <h3>
            <Link to='/'>furniture</Link>
          </h3>
          <button
            className='sidebar-btn'
            onClick={() => dispatch(closeSidebar())}
          >
            <MdClose />
          </button>
        </div>
        <hr />
        <div className='sidebar-links'>
          {links.map(({ id, url, name }) => {
            return (
              <Link to={url} key={id} onClick={() => dispatch(closeSidebar())}>
                {name}
              </Link>
            )
          })}
        </div>
        <ButtonsContainer className='btns-container' />
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  aside {
    background: var(--notExactlyWhite);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(-100%);
    transition: var(--transition);
    z-index: -1;
  }
  .show-sidebar {
    z-index: 999;
    transform: translate(0);
  }
  .sidebar-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0.5rem;
    h3 {
      background: var(--black);
      padding: 0.25rem 0.5rem;
      a {
        color: var(--white);
      }
    }
  }
  hr {
    color: var(--black);
  }
  .sidebar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.4rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
  }
  .sidebar-btn:hover {
    transition: var(--transiton);
    background: lightgrey;

    border-radius: 5px;
  }
  .sidebar-links {
    width: 85vw;
    margin: 3rem auto;
    text-transform: capitalize;
    font-weight: bold;
    display: grid;
  }
  .sidebar-links a {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    color: black;
  }
  .sidebar-links a:hover {
    transition: var(--transition);
    background: var(--darkGrey);
    border-radius: 5px;
  }
  .btns-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85vw;
    margin: 0 auto;
  }
`

export default Sidebar
