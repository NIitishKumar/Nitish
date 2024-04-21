import React from 'react'

function Contact() {
  return (
    <div className='px-4'>
      <div className='w-full flex justify-between'>
        <div className='bg-inherit text-left float-left block mb-3'>
          <span className='text-highlight text-4xl mb-4'>
            Contact
          </span>
          <br />
          <p className='text-white gap-x-1 text-2xl mt-3 mb-0'>“If I had asked people what they wanted, they would have said faster horses. ”</p><span className='text-center w-full text-white mx-auto'> - Henry Ford </span><br />
        </div>
        {/* <div className='w-[29%]'> */}
        {/* <img alt='leptop' src='leptop.jpeg' className='blur-[1px]' /> */}
        {/* <img alt='coding' src='coding.jpeg' className='blur-[1px] h-[95%]' /> */}
        {/* </div> */}
      </div>
      <div className='text-white flex justify-between w-full py-4 px-[10%] my-4 bg-slate-900 mt-4 font-light'>
        <div className='flex'>
          {/* <img alt='linkedIn' src='linkedin.png' height={"8px"} width={"30px"} className='mr-0 md:mr-3 lg:mr-3 xl:mr-3' /> */}
          <a href='https://www.linkedin.com/in/nitishkumar746' target='_blank' className='flex'>
            <div>
              <img alt='linkedIn' src='linkedin.png' height={"6px"} width={"25px"} className='mr-0 md:mr-3 lg:mr-3 xl:mr-3' />
            </div>
            LinkedIn</a>
        </div>
        <div className='flex'>

          <a href='https://github.com/NIitishKumar?tab=repositories' target='_blank' className='flex'>
            <div>
              <img alt='github' src='github.png' height={"8px"} width={"30px"} className='mr-0 md:mr-3 lg:mr-3 xl:mr-3' />
            </div>
            Github</a>
        </div>
        <div className='flex'>

          <a href='mailto:nitishkumar.ng746@gmail.com' className='flex'><div>
            <img alt='gamil' src='gmail3.webp' height={"4px"} width={"25px"} className='mr-0 md:mr-3 lg:mr-3 xl:mr-3' />
          </div>
            Gmail</a>
        </div>
      </div>
    </div>
  )
}

export default Contact;