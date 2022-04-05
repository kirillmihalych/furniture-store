import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { FaBars } from '../assets/icons'
import ButtonsContainer from './ButtonsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../features/productSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isSidebarOpen } = useSelector((state) => state.product)
  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'show-sidebar' : null}>
        <div className='sidebar-title'>
          <h1>furniture</h1>
          <button
            className='sidebar-btn'
            onClick={() => dispatch(closeSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <div className='sidebar-links'>
          {links.map(({ id, url, name }) => {
            return (
              <Link to={url} key={id}>
                {name}
              </Link>
            )
          })}
        </div>
        <ButtonsContainer />
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);
    transition: var(--transition);
  }
  .show-sidebar {
    transition: var(--transition);
    transform: translateY(0);
  }
  .sidebar-btn {
    position: fixed;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: transparent;
    border: none;
  }
  .sidebar-links {
    margin-top: 3rem;
    display: grid;
  }
  .sidebar-links a {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: black;
  }
  .sidebar-links a:hover {
    text-decoration: underline;
  }
`

export default Sidebar
