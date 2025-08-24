import React from 'react'

const Resume = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className='h-[92%] w-[90%] '>
            <div className='h-[50%] w-[100%] flex '>
                <h2 className='font-barlow font-bold text-[400px] leading-[260px]  uppercase font-semibold'>re-</h2>
                <img src="https://cdn.pixabay.com/photo/2016/03/27/19/12/man-1283748_960_720.jpg" alt="" className='h-[95%] w-[65%] object-cover '/>
            
            </div>
            <div className='h-[48%] w-[100%] flex justify-between '>
                    <h2 className='font-barlow font-bold text-[400px] leading-[280px] uppercase font-semibold '>sume</h2>
                    <div className='w-[38%] h-[100%] flex flex-col gap-[30%] justify-center'>
                      <div className='w-[100%] h-[26%] '>
                        <p className='font-barlow uppercase text-[20px]'><span className='text-[20px] uppercase font-semibold'>Created by: </span>Kathan sahu</p>
                        <p className='font-barlow uppercase text-[20px]'><span className='text-[20px] uppercase font-semibold'>Info: </span>Vijay nagar Indore, India </p>
                        <p className='font-barlow uppercase text-[20px]'><span className='text-[20px] uppercase font-semibold'>www.kathansahu.com</span></p>
                      </div>    
                      <div className='w-[100%] h-[35%] flex flex-col justify-end'>
                        <div className='font-barlow flex justify-between uppercase text-[22px] pb-[3px] border-b-[1.4px]'>
                            <div>
                                client name
                            </div>
                            <div className='text-[24px] font-semibold'>
                                kathan sahu
                            </div>
                        </div>
                        <div className='font-barlow flex justify-between uppercase text-[22px] pb-[3px] border-b-[1.4px]'>
                            <div>
                                project name
                            </div>
                            <div className='text-[24px] font-semibold'>
                                portfolio website
                            </div>
                        </div>
                        <div className='font-barlow flex justify-between uppercase text-[22px] pb-[3px] border-b-[1.4px]'>
                            <div>
                                project date
                            </div>
                            <div className='text-[24px] font-semibold'>
                                28/07/2025
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="prs" className='uppercase font-barlow text-[52px] font-extrabold absolute rotate-[-90deg] bottom-[21.7%] right-[35.2%]'>Presentation</div>
        </div>
    </div>
  )
}

export default Resume