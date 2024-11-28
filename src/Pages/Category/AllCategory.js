import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'

const AllCategory = () => {
  return (
    <div style={{minHeight: "670px"}}>
        <CategoryContainer />
        <Pagination />
    </div>
  )
}

export default AllCategory
