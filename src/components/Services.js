import styled from 'styled-components'
import { FaMap, FaHammer, FaChair } from '../assets/icons'

const Services = () => {
  return (
    <Wrapper className='section-center'>
      <section>
        {/* title */}

        <h2 className='services-title'>
          Custom furniture
          <br />
          built only for you
        </h2>
        {/* services */}

        <div className='services'>
          {/* single service */}

          <article className='single-service'>
            <h3>Delivery</h3>
            <FaMap />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dolores. Eveniet ratione vero aspernatur quae.
            </p>
          </article>
          {/* single service */}

          <article className='single-service'>
            <h3>Repair</h3>
            <FaHammer />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dolores. Eveniet ratione vero aspernatur quae.
            </p>
          </article>
          {/* single service */}

          <article className='single-service'>
            <h3>Cleaning</h3>
            <FaChair />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dolores. Eveniet ratione vero aspernatur quae.
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-bottom: 15rem;
  }
  .single-service {
    background: var(--darkGrey);
    border: 2px solid var(--notExactlyBlack);
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
  }
  .single-service p {
    text-align: center;
  }
  .services-title {
    margin: 3rem 0;
    text-align: center;
    line-height: 2rem;
  }
  svg {
    font-size: 1.75rem;
  }
`

export default Services
