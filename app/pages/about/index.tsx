import React from 'react'

function About() {
  return (
    <div className='px-4 my-auto'>
      <div className='w-full flex justify-between'>
        <div className='bg-inherit text-left float-left block'>
          <span className='text-highlight text-4xl mb-4'>
            Hi, I&apos;am Nitish,
          </span>
          <br />
          <span className='text-white gap-x-1 text-4xl my-6'>I help startups build products that works. ⚡️⚡️ </span><br />
          <div className='mt-2'>

            <span className='text-sm text-white leading-[0] my-5'>I am a highly skilled web developer with over 3 years of experience in JavaScript, React, and Nodejs. Proficient in building dynamic web applications and RESTful APIs, I have a proven track record of delivering high-quality software solutions. Skilled in front-end development with React.js, NextJs with Typescript. I specialize in creating responsive and intuitive user interfaces. With expertise in full-stack development using Node.js, MongoDB and ReactJs. Dedicated to staying updated with the latest technologies and best practices, I am committed to delivering scalable and efficient solutions that meet client needs. Passionate about problem-solving and collaboration, I thrive in agile development environments and enjoy working on diverse teams.
            </span>
          </div>
          <div className='mt-6'>
            <span className='text-highlight text-4xl mb-4'>Skills </span>
          </div>
          <div className='block md:flex lg:flex xl:flex gap-x-2'>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>HTML</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>CSS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>JavaScript</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>ReactJS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>NextJS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>Tailwind CSS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>NodeJS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>ExpressJS</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>MongoDB</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>Redux & Toolkit</button>
            <button className='block btn bg-slate-950 border border-slate-600 mt-3 px-2 rounded text-white'>Git</button>
          </div>
          <div className='text-white flex lg:flex-row md:flex-col xl:flex-row flex-col justify-between w-full py-4 px-[10%] mb-4 bg-slate-900 mt-[5%] font-light'>
            <span className='sm:block'>◦ Cliffex</span>
            <span className='sm:block'>◦ Applore</span>
            <span className='sm:block'>◦ Insurance Samadhan</span>
          </div>
        </div>
        <div className=''>
          {/* <img alt='leptop' src='leptop.jpeg' className='blur-[1px]' /> */}
          {/* <img alt='coding' src='coding.jpg' className='blur-[0px] rounded h-[95%]' /> */}
        </div>
      </div>
    </div>
  )
}

export default About;