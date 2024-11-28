import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const handlePageClick = () => {};
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="الثاني"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={100}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        // pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        // previousClassName={"page-link"}
        // nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        // breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  )
}

export default Pagination
