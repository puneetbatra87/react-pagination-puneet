import React from 'react'

import Pagination from 'react-pagination-puneet'
import 'react-pagination-puneet/dist/index.css'

const App = () => {
  let page = 1;
  const totalPages = 5;

  const handleChangePage = (currentPage) => {
    page = currentPage;
  }
  return <Pagination page={page} pages={totalPages} handleChangePage={handleChangePage} />
}

export default App;
