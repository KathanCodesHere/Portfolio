import React from 'react'

const Education = () => {
  return (
    <div className='w-full h-screen bg-blue-100 flex p-[1%]'>
        <div className='w-[45%] h-[100%] bg-red-100'>
          <div className="w-[100%] h-[80%] bg-blue-400">
              <img src="https://images.unsplash.com/photo-1662119970138-68abf7a91150?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[100%] h-[100%]' alt="" />
          </div>
          <div className='w-[100%] h-[20%] bg-orange-400'>
              <h3 className='uppercase font-barlow text-[180px] leading-[125px] font-bold tracking-[-5px]'>Education</h3>
          </div>
        </div>
        <div className='w-[55%] h-[100%] bg-red-200 pr-[3%]'>

        </div>
    </div>
  )
}

export default Education