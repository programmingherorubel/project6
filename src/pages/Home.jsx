import React from 'react'
import Aside from '../components/home/Aside'
import PostGrid from '../components/home/PostGrid'

const Home = () => {
  return (
    <section className="wrapper">
        <Aside />
        <PostGrid />
    </section>
  )
}

export default Home