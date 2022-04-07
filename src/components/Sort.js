import styled from 'styled-components'
import { BsGridFill, BsList } from '../assets/icons'
import { useDispatch } from 'react-redux'
import { setGridView, setListView } from '../features/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <section className='sort-wrapper'>
        <div className='btn-container'>
          <div className='icons'>
            <button onClick={() => dispatch(setGridView())}>
              <BsGridFill />
            </button>
            <button onClick={() => dispatch(setListView())}>
              <BsList />
            </button>
          </div>
          <h4>20 product found</h4>
        </div>
        <hr />
        <form className='sort-form'>
          <label htmlFor='sort'>Sort by</label>
          <select name='sort'>
            <option value=''>A to Z</option>
            <option value=''>Z to A</option>
            <option value=''>Heighest price</option>
            <option value=''>Lowest price</option>
          </select>
        </form>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sort-wrapper {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    margin-bottom: 2rem;
  }
  hr {
    display: flex;
    align-self: center;

    height: 0px;
  }
  .btn-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
  .icons {
    display: flex;
  }
  .icons button {
    display: flex;
    cursor: pointer;
    border: none;
    background: transparent;
    margin-right: 1rem;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 567px) {
    hr {
      display: none;
    }
  }
`

export default Sort
