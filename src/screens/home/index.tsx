import React from 'react'
import HomeView from './Home.view'
import useHomeModel from './Home.model'

const Home = () => {
  return <HomeView {...useHomeModel()} />
}

export default Home
