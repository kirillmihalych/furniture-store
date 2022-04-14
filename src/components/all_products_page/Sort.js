import styled from 'styled-components'
import { BsGridFill, BsList } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setGridView, setListView, setSort } from '../../features/filterSlice'

const Sort = () => {
  const dispatch = useDispatch()
  const { filtered_products, gridView } = useSelector((state) => state.filter)

  const updateSort = (e) => {
    let value = e.target.value
    dispatch(setSort({ value }))
  }

  return (
    <Wrapper>
      <section className='sort-wrapper'>
        <div className='btn-container'>
          <div className='icons'>
            <button
              onClick={() => dispatch(setGridView())}
              className={gridView ? 'icon-btn active' : 'icon-btn'}
            >
              <BsGridFill />
            </button>
            <button
              onClick={() => dispatch(setListView())}
              className={!gridView ? 'icon-btn active' : 'icon-btn'}
            >
              <BsList />
            </button>
          </div>
          <h4>{filtered_products.length} product found</h4>
        </div>
        <hr />
        <form className='sort-form'>
          <label htmlFor='sort' className='sort-label'>
            Sort by
          </label>
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
    min-width: 25px;
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
  .icon-btn {
    display: flex;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0.1rem;
    border-radius: 3px;
    margin-right: 1rem;
    font-size: 1.25rem;
  }
  .active {
    background: var(--darkGrey);
  }
  .sort-label {
    margin-right: 0.5rem;
  }
  select,
  option {
    cursor: pointer;
    background: var(--white);
    border: 3px solid var(--black);
    padding: 0.15rem 0.3rem;
  }
  @media screen and (max-width: 567px) {
    hr {
      display: none;
    }
  }
  @media (max-width: 718px) {
    margin-top: 2rem;
  }
`

export default Sort
