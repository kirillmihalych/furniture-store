import styled from 'styled-components'
import { BsGridFill, BsList } from '../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setGridView, setListView, setSort } from '../features/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()

  const updateSort = (e) => {
    let value = e.target.value

    dispatch(setSort({ value }))
  }

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
            <option value='heighest' onClick={updateSort}>
              Heighest price
            </option>
            <option value='lowest' onClick={updateSort}>
              Lowest price
            </option>
            <option value='a' onClick={updateSort}>
              A to Z
            </option>
            <option value='z' onClick={updateSort}>
              Z to A
            </option>
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
