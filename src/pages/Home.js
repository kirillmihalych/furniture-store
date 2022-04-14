import {
  HomeHero,
  FeaturedProducts,
  Services,
  NewsForm,
  ShowOrder,
} from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const { isModalShown } = useSelector((state) => state.cart)

  return (
    <>
      {isModalShown ? <ShowOrder /> : null}
      <HomeHero />
      <FeaturedProducts />
      <Services />
      <NewsForm />
    </>
  )
}

export default Home
