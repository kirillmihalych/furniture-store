import styled from 'styled-components'
import { FaGithub } from '../assets/icons'

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <p>
          Made by<span> KIRILL F.</span>
          <a href='https://github.com/Fen1xex'>
            <FaGithub />
          </a>
        </p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5rem;
  background: var(--notExactlyWhite);
  border-top: 2px solid var(--notExactlyBlack);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    font-size: 1.75rem;
    color: var(--black);
  }
  p {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 0.5rem;
  }
`

export default Footer
