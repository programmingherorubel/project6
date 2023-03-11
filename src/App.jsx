import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostView from './pages/PostView'
import Redirect from './pages/Redirect'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<PostView />} />
        <Route path='/posts' element={<Redirect />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App