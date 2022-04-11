import styled from 'styled-components'

const LoadingSpinner = () => {
  return (
    <Wrapper className='center'>
      <div className='loading-spinner'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .loading-spinner {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid var(--darkGrey);
    border-bottom: 16px solid var(--darkGrey);
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default LoadingSpinner
