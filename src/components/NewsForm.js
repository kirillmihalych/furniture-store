import styled from 'styled-components'

const NewsForm = () => {
  return (
    <Wrapper className='section-center'>
      <form>
        <h2 className='form-title'>
          Join our newsletters
          <br />
          and get 20% sale right now
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
  .form-title {
    line-height: 2rem;
    text-align: center;
  }
  .input-wrapper {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 15rem;
  }
  .input-wrapper input {
    background: transparent;
    border: 2px solid var(--darkGrey);
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
    background: transparent;
    border: 2px solid var(--darkGrey);
    border-left: none;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    background: var(--darkRed);
    text-transform: uppercase;
  }
  .input-wrapper button:hover {
    cursor: pointer;
    transition: var(--transition);
    color: var(--white);
    /* background: var(--red); */
  }
`

export default NewsForm
