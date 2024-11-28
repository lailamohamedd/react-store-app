import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitily/SubTitle'
import BrandCard from './BrandCard'
import brand1 from '../../assets/images/brand1.png'

const BrandFeatured = ({title, btnTitle, pathText}) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText="/brands" />
      <Row className='my-2 d-flex justify-content-between'>
        <BrandCard img={brand1} />
      </Row>
    </Container>
  )
}

export default BrandFeatured
