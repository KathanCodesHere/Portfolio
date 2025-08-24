import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Resume from './Components/Resume'
import Contents from './Components/Contents'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Education from './Components/Education'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        <Route path='/contents' element={<Contents/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App