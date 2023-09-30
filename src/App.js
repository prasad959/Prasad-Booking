import React from 'react'
import BookingApp from './components/BookingApp'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StoreList from './components/StoreList'

const App = () => {
  return (
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<BookingApp />} />
      <Route path='/storelist' element={<StoreList />} />
      
    </Routes>
     
    </BrowserRouter>
  )
}

export default App