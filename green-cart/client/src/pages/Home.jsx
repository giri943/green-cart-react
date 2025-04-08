import React from 'react'
import MainBanner from '../components/MainBanner'
import CategoriesList from '../components/CategoriesList'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <CategoriesList />
    </div>
  )
}

export default Home