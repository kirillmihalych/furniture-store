import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='center'>
      <div>
        <h2>Error</h2>
        <p>this page does not exist</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    text-transform: uppercase;
  }
  p {
    margin-top: 1rem;
  }
  a {
    background: var(--notExactlyBlack);
    padding: 0.5rem 1rem;
    color: var(--notExactlyWhite);
    border: 2px solid transparent;
  }
  a:hover {
    transition: var(--transition);
    color: var(--notExactlyBlack);
    background: var(--notExactlyWhite);
    border: 2px solid var(--notExactlyBlack);
  }
`

export default Error
