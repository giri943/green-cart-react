import React from 'react'
import MainBanner from '../components/MainBanner'
import CategoriesList from '../components/CategoriesList'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <CategoriesList />
        <BestSeller />
        <BottomBanner />
    </div>
  )
}

export default Home