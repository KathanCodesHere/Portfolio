import React from 'react'

const ExpC = ({data}) => {
  return (
    <div className='w-[100%] h-[100%] border-r-[1px]'>
        <div className='w-[100%] h-[23%] flex items-center justify-between'>
            <div className='pl-[5px]'>{data.year}</div>
            <div className='font-barlow font-bold w-[44%] flex items-center justify-center h-[100%] text-[90px] rounded-full border-[1px]'>{data.sno}</div>
        </div>
        <div className='w-[100%] h-[10%] flex items-center justify-center uppercase font-barlow text-[18px] font-bold border-y-[1px]'>
            {data.month}
        </div>
        <div className='w-[100%] h-[67%] border-b-[1px]'>
            <h2 className='uppercase font-barlow font-semibold text-2xl pt-[15px] text-center'>{data.company}</h2>
            <h3 className='uppercase font-open  text-lg font-semibold pt-[5px] text-center'>{data.position}</h3>
            <h3 className='text-center font-open text-[18px] pt-[10px]'>Roles and Responsibilities</h3>
            <ul className='list-disc pl-[22px] font-open text-sm pt-[5px]'>
              {data.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
            </ul>
        </div>
    </div>
  )
}

export default ExpC