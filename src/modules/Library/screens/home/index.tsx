import useHomeModel from './Home.model'
import HomeView from './Home.view'

export const Home = () => {
  return <HomeView {...useHomeModel()} />
}
