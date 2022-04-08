import React, { useEffect } from 'react'
import styled from 'styled-components'
import { setFilter, filterProducts } from '../features/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaCheck } from '../assets/icons'

const Filters = () => {
  const dispatch = useDispatch()
  const { all_products, filters } = useSelector((state) => state.filter)
  const { text, category, colors, company } = filters

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'company') {
      value = e.target.textContent
    }
    if (name === 'colors') {
      value = e.target.dataset.color
    }
    dispatch(setFilter({ name, value }))
  }

  useEffect(() => {
    dispatch(filterProducts())
  }, [filters])

  const getUniqueValues = (items, name) => {
    let unique = items.map((item) => item[name])
    if (name === 'colors') {
      unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
  }

  const uniqueColors = getUniqueValues(all_products, 'colors')
  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')

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
        <h4 className='filters-title'>Categories</h4>
        {categories.map((currentCategory, index) => {
          return (
            <button
              name='category'
              className={category === currentCategory ? 'btn active' : 'btn'}
              key={index}
              onClick={updateFilters}
            >
              {currentCategory}
            </button>
          )
        })}
      </div>
      {/* end of category */}
      {/* companies */}
      <div className='companies'>
        <h4 className='filters-title'>Companies</h4>
        {companies.map((currentCompany, index) => {
          return (
            <button
              name='company'
              className={company === currentCompany ? 'btn active' : 'btn'}
              key={index}
              onClick={updateFilters}
            >
              {currentCompany}
            </button>
          )
        })}
      </div>
      {/* end of companies */}
      {/* colors */}
      <div>
        <h4 className='filters-title'>Colors</h4>
        <div className='colors'>
          {uniqueColors.map((color, index) => {
            if (color === 'all') {
              return (
                <button
                  name='colors'
                  key={index}
                  // style={{ background: color }}
                  data-color='all'
                  className='all-btn'
                  onClick={updateFilters}
                >
                  all
                </button>
              )
            } else {
              return (
                <button
                  name='colors'
                  key={index}
                  style={{ background: color }}
                  data-color={color}
                  className='color'
                  onClick={updateFilters}
                >
                  {color === colors ? <FaCheck className='color-icon' /> : null}
                </button>
              )
            }
          })}
        </div>
      </div>
      {/* end of colors */}
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

  .btn {
    cursor: pointer;
    background: transparent;
    border: 2px solid var(--black);
    padding: 0.1rem 0.2rem;
    margin-bottom: 0.25rem;
  }
  .btn:hover {
    background: var(--darkGrey);
    transition: var(--transition);
  }
  .filters-title {
    margin: 1rem 0;
  }
  .active {
    background: var(--darkGrey);
  }
  //colors
  .colors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
  }
  .color {
    position: relative;
    cursor: pointer;
    display: inline-block;
    border: 2px solid black;
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
  }
  .all-btn {
    cursor: pointer;
    background: transparent;
    border-radius: 10px;
    border: 2px solid black;
    width: 25px;
    height: 25px;
  }
  .color-icon {
    color: var(--green);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  //companies
  .companies {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export default Filters
