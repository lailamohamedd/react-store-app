import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SlideFilter from '../../Components/Uitily/SlideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'

const ShopProducts = () => {
  return (
    <div style={{minHeight: "670px"}}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
        <Row className='d-flex flex-row'>
          <Col sm="2" xs="2" md="1" className='d-flex'>
            <SlideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer title="" btnTitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}

export default ShopProducts
