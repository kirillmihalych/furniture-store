import styled from 'styled-components'
import { FaMap, FaHammer, FaChair } from '../../assets/icons'

const Services = () => {
  return (
    <Wrapper>
      <section className='section-center'>
        {/* title */}

        <h2 className='services-title'>
          Custom furniture
          <br />
          <span>built only for you!</span>
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
  background: var(--notExactlyWhite);
  margin-top: 7rem;
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }
  .single-service {
    background: var(--white);
    border: 3px solid var(--notExactlyBlack);
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    box-shadow: var(--shadow);
  }
  .single-service p {
    text-align: center;
  }
  .services-title {
    margin-bottom: 3rem;
    color: var(--black);
    text-align: center;
    line-height: 3rem;
    font-style: italic;
  }
  svg {
    font-size: 1.75rem;
  }
`

export default Services
