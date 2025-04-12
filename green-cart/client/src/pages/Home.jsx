import React from 'react'
import MainBanner from '../components/MainBanner'
import CategoriesList from '../components/CategoriesList'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <CategoriesList />
        <BestSeller />
    </div>
  )
}

export default Home