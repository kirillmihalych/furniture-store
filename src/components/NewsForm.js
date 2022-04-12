import styled from 'styled-components'

const NewsForm = () => {
  return (
    <Wrapper>
      <form className='section-center'>
        <h2 className='form-title'>
          Join our newsletter
          <br />
          and <br />
          <span>get 20% off</span>
        </h2>
        <div className='input-wrapper'>
          <input type='email' placeholder='enter your e-mail' />
          <button type='submit'>subscribe</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: lightgray;
  margin-top: 5rem;
  padding: 10rem 0;
  .form-title {
    font-style: italic;
    margin-bottom: 4rem;
    line-height: 3rem;
    text-align: center;
    span {
      display: inline-block;
      background: black;
      padding: 0 1rem;
      color: var(--white);
      margin-top: 0.5rem;
      border: 3px solid var(--white);
    }
  }
  .input-wrapper {
    text-align: center;
  }
  .input-wrapper input {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: var(--white);
    border: 3px solid var(--black);
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
  .input-wrapper input::placeholder {
    font-style: italic;
    text-transform: capitalize;
  }
  .input-wrapper input:focus {
    outline: none;
  }
  .input-wrapper button {
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: transparent;
    border: 3px solid var(--black);
    border-left: none;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: #eebc1d;
    color: var(--black);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
  }
  .input-wrapper button:hover {
    transition: var(--transition);
    background: #ffd700;
  }
`

export default NewsForm
