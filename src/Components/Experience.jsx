import React from 'react'
import ExpC from './ExpC'
import { expf } from '../expdata'
const Experience = () => {
  return (
    <div className='h-screen w-[100%] p-[0_1%_0_0] '>
            <div className='w-[100%] h-[30%] flex border-b-[1.5px]'>
                <div className='w-[65%] h-[100%] pl-[1%] font-barlow text-[190px] leading-[200px] font-bold uppercase tracking-[-5px]'>
                    experience
                </div>
                <div className='w-[35%] h-[100%] border-l-[1.5px] border-r-[1.5px] pt-[3%] font-open font-medium'>
                    <div className='w-[100%] h-[64%] text-[12px] p-[3%_8%] border-t-[1.5px] border-b-[1.5px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio illum beatae impedit voluptatum, reprehenderit ullam in hic harum mollitia ea voluptatibus a sed dolorem. Harum excepturi asperiores eum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className='w-[100%] h-[35%] uppercase text-[20px] flex items-center justify-center'>
                        <div>summary</div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[70%] flex'>
                    <div className=' w-[30%] border-r-[1.5px]'>
                        <div className='p-[5%_6.5%] h-[100%]'>
                            <img src="https://images.unsplash.com/photo-1639177578353-d8b9b998e6be?q=80&w=681&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[100%] h-[100%] object-cover'/>
                        </div>
                    </div>
                    <div className='w-[70%] flex border-r-[1.5px]'>
                            {expf.map((item,index)=>{
                                return(
                                    <div key={index} className='w-[25%] h-[95%]'>
                                        <ExpC data={item}/>
                                    </div>
                                )
                            })}

                    </div>
            </div>
        </div>
  )
}

export default Experience
