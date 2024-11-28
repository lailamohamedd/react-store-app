import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'

const Home = () => {
  return (
    <div className='almarai-regular' style={{minHeight: '670px'}}>
      <Slider />
      <HomeCategory />
      <DiscountSection />
      <CardProductsContainer title="الاكثر مبيعا" btnTitle="المزيد" pathText="/products" />
      <BrandFeatured title="اشهر الماركات " btnTitle="المزيد"  />
    </div>
  )
}

export default Home
