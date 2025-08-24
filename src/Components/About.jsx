import React from 'react'

const About = () => {
  return (
        <div className='h-screen w-[100%] bg-[#171717ff] text-white p-[1%_2%] flex flex-col justify-between'>
            <div className='w-[90%] h-[45%] flex justify-between font-open'>
                <div className='w-[40%] h-[100%] bg-[url("https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-position-[5%_55%]'>
                </div>
                <div className=' w-[30%] h-[100%]'>
                    <p className='uppercase'>Description</p>
                    <br/><br/>
                    <p>I'm a passionate developer with over 2 years of experience working as a Unity Developer. During this time, I’ve built immersive, interactive applications and sharpened my problem-solving skills in 3D environments.</p>
                    <br/><br/>
                    <p>Recently, I’ve transitioned to full-stack web development with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js). I love building responsive, scalable web apps that offer great user experiences.</p>
                </div>
                <div className='w-[20%] h-[100%]'>
                    <p className='uppercase'>Details</p>
                    <br/><br/>
                    <p>Experience: 2+ years in Unity Development </p>
                    <br/><br/><br/><br/>
                    <p>Current Focus: MERN Stack Full-Stack Development</p>
                </div>
            </div>
            <div className='w-[95%] h-[25%] flex justify-between uppercase text-[190px] font-semibold font-barlow'>
                <div className='leading-[200px] mt-[-1%]'>about me</div>
                <div className='leading-[200px] mt-[-1%]'>3</div>
            </div>
        </div>
  )
}

export default About