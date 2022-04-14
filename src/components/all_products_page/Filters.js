import styled from 'styled-components'
import { setFilter, clearFilters } from '../../features/filterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaCheck } from '../../assets/icons'
import { format_price, getUniqueValues } from '../../utils/helpers'

const Filters = () => {
  const dispatch = useDispatch()
  const { all_products, filters } = useSelector((state) => state.filter)
  const {
    text,
    category,
    colors,
    company,
    min_price,
    max_price,
    price,
    shipping,
  } = filters

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
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch(setFilter({ name, value }))
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
          className='search-input'
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
      {/* price */}
      <div>
        <h4 className='filters-title'>Price range</h4>
        <h4 className='filters-title title-price'>{format_price(price)}</h4>
        <form>
          <input
            name='price'
            type='range'
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
            className='range-input'
          />
        </form>
      </div>
      {/* end of price */}
      {/* shipping */}
      <div>
        <h4 className='filters-title'>Shipping</h4>
        <form>
          <input
            name='shipping'
            type='checkbox'
            onChange={updateFilters}
            checked={shipping}
          />
        </form>
      </div>
      {/* end of shipping */}
      <button
        onClick={() => dispatch(clearFilters())}
        className='clear-filter-btn'
      >
        clear filters
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //search
  .search-input {
    font-size: 1rem;
    background: var(--white);
    border: 3px solid var(--darkGrey);
    border-radius: 5px;
    font-style: italic;
    padding: 0.1rem 0.2rem;
  }
  .search-input::placeholder {
    font-style: italic;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  .search-input:focus {
    outline: none;
  }
  //categories
  .categories {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  .btn {
    text-transform: capitalize;
    text-align: start;
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
    background: black;
    padding: 0.2rem 0.4rem;
    font-style: italic;
    color: #eebc1d;
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
    /* border-radius: 10px; */
    text-transform: capitalize;
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
  }
  //price
  .range-input {
    -webkit-appearance: none;
    width: 100%;
    background: var(--darkGrey);
    border-radius: 5px;
    cursor: pointer;
  }
  .title-price {
    background: #eebc1d;
    color: black;
    border: 3px solid var(--black);
  }
  //clear filters btn
  .clear-filter-btn {
    cursor: pointer;
    font-size: 1rem;
    background: white;
    border: 3px solid var(--black);
    padding: 0.25rem 0.5rem;
    width: 100%;
    display: block;
    margin-top: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: bold;
  }
  .clear-filter-btn:hover {
    transition: var(--transition);
    background: var(--black);
    color: var(--white);
  }
`

export default Filters
