import React from 'react'
import Resume from './Resume'
import Contents from './Contents'
import About from './About'
import Experience from './Experience'
import Education from './Education'
const Home = () => {
  return (
    <div>
        <Resume/>
        <Contents/>
        <About/>
        <Experience/>
        {/* <Education/> */}
    </div>
  )
}

export default Home