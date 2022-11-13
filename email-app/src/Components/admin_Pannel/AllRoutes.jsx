import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddtoProduct from './AddtoProduct'
import AdminHome from './AdminHome'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/store' element={<AddtoProduct/>}></Route>
        <Route path='/adminhome' element={<AdminHome/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes