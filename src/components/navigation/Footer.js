import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <h4>
          &copy; all rights reserved
          <span>{new Date().getFullYear()}</span>
        </h4>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 4rem;
  background: var(--notExactlyBlack);
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
  h4 {
    color: var(--white);
  }
  span {
    margin-left: 0.5rem;
  }
`

export default Footer
