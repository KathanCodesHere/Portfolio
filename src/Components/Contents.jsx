import React from 'react'

const Contents = () => {
  return (
        <div className='w-full h-screen'>  
            <div className='w-[100%]  h-[28%] flex flex-col justify-between'>
                <div className='flex justify-between p-[1% 0] font-open pr-[3%]'>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>01</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>Experience</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>04</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>interests</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>07</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>projects</p>
                </div>
                <div className='flex justify-between p-[1% 0] font-open pr-[3%]'>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>02</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>Education</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>05</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>hobbies</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>08</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>contact</p>
                </div>
                <div className='flex justify-between p-[1% 0] font-open pr-[3%]'>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>03</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>skills</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>06</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>interests</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>09</p>
                    <p className='text-[18px] uppercase text-center w-[7.5%]'>social</p>
                </div>
            </div>
            <div className='w-[95%] h-[35%] font-barlow font-semibold uppercase text-center text-[240px] leading-[220px]'>
                contents
            </div>
            <div className='w-[100%] h-[34%] flex items-center justify-center'>
                <img src="https://images.unsplash.com/photo-1503341185129-85e5373a73b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[95%] h-[100%] object-cover object-[0%_15%]'/>
            </div>
        </div>
  )
}

export default Contents