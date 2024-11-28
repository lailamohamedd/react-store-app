import React from 'react'
import CategoryContainer from '../Category/CategoryContainer'
// import SubTitle from '../Uitily/SubTitle'
import { Container } from 'react-bootstrap'

const HomeCategory = () => {
  return (
    <Container>
      {/* <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/categories" /> */}
      <CategoryContainer />
      {/* <Pagination /> */}
    </Container>
  )
}

export default HomeCategory
