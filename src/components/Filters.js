import React, { useEffect } from 'react'
import styled from 'styled-components'
import { setFilter, filterProducts } from '../features/filterSlice'
import { useSelector, useDispatch } from 'react-redux'

const Filters = () => {
  const dispatch = useDispatch()
  const { all_products, filters } = useSelector((state) => state.filter)
  const { text, category } = filters

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (category) {
      value = e.target.textContent
    }
    dispatch(setFilter({ name, value }))
  }

  useEffect(() => {
    dispatch(filterProducts())
  }, [filters])

  const getUniqueValues = (items, name) => {
    let unique = items.map((item) => item[name])
    return ['all', ...new Set(unique)]
  }

  const categories = getUniqueValues(all_products, 'category')

  return (
    <Wrapper>
      {/* search */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name='text'
          type='text'
          placeholder='search'
          value={text}
          onChange={updateFilters}
        />
      </form>
      {/* end of search */}
      {/* category */}
      <div className='categories'>
        {categories.map((category, index) => {
          return (
            <button name='category' key={index} onClick={updateFilters}>
              {category}
            </button>
          )
        })}
      </div>
      {/* end of category */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //categories
  .categories {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .categories button {
    cursor: pointer;
    background: none;
    border: 2px solid var(--black);
    padding: 0.1rem 0.2rem;
    margin-bottom: 0.25rem;
  }
  .categories button:hover {
    background: var(--darkGrey);
    transition: var(--transition);
  }
  .active {
    background: var(--darkGrey);
  }
`

export default Filters
