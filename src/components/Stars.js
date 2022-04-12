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
      <div className='rating'>
        <div className='stars'>{currentStars}</div>
        <div>{reviews} customer reviews</div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 0.75rem;
  .rating {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  svg {
    font-size: 1.5rem;
    color: #ffd700;
  }
`

export default Stars
