import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { closeModal } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const ShowOrder = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <article className='show-order'>
        <div className='wrapper'>
          <h4 className='title-show-order'>
            Your order is successfully accepted!
          </h4>
          <Link
            to='products'
            className='link-show-order'
            onClick={() => dispatch(closeModal())}
          >
            continue shopping
          </Link>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 999;
  .show-order {
    background: white;
    height: 250px;
    width: 250px;
    border-radius: 5px;
    border: 3px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-show-order {
    text-align: center;
    line-height: 2rem;
    width: 200px;
    margin: 0 auto;
  }
  .link-show-order {
    display: inline-block;
    margin-top: 1rem;
    background: transparent;
    border: 3px solid var(--black);
    text-transform: capitalize;
    background: #eebc1d;
    padding: 0.25rem 0.5rem;
    color: var(--black);
    letter-spacing: var(--spacing);
    font-weight: 700;
    cursor: pointer;
  }
  .link-show-order:hover {
    background: #ffd700;
    transition: var(--transition);
  }
`

export default ShowOrder
