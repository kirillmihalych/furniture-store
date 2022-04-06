import { BsStarFill, BsStarHalf, BsStar } from '../assets/icons'
import styled from 'styled-components'

const Stars = ({ stars, reviews }) => {
  const currentStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <Wrapper>
      <h3 className='stars-title'>Product ratings</h3>
      <div className='rating'>
        <div className='stars'>{currentStars}</div>
        <p>{reviews} customer reviews</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .stars-title {
    margin-top: 1rem;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  svg {
    font-size: 1.5rem;
    color: #ffd700;
  }
`

export default Stars
