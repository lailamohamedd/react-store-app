import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe from "../../assets/images/clothe.png"
import cat2 from "../../assets/images/cat2.png"
import labtop from "../../assets/images/labtop.png"
import sale from "../../assets/images/sale.png"
import pic from "../../assets/images/pic.png"
import CategoryCard from '../../Components/Category/CategoryCard'
import SubTitle from '../Uitily/SubTitle'

const CategoryContainer = ({title, btnTitle}) => {
  return (
    <Container>
      <div className='admin-content-text my-1 d-flex justify-content-between'>كل التصنيفات</div>
      <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/categories" />
      <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title="الاجهزة النزلية" img={clothe} background="#fe7d92" />
        <CategoryCard title="الاجهزة النزلية" img={cat2} background="#f359ed" />
        <CategoryCard title="الاجهزة النزلية" img={labtop} background="#7bccdc" />
        <CategoryCard title="الاجهزة النزلية" img={sale} background="#f4d8a4" />
        <CategoryCard title="الاجهزة النزلية" img={clothe} background="#f52" />
        <CategoryCard title="الاجهزة النزلية" img={pic} background="#4d8a" />
      </Row>
    </Container>
  )
}

export default CategoryContainer
