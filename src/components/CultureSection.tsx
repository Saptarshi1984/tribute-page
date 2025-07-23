import React from 'react'
import ButttonPrimary from './ButttonPrimary'

const CultureSection = () => {
  return (
    <>

        <div className='!flex !flex-col !mx-4 gap-6 !justify-evenly items-center h-screen sm:!gap-8 '>
        <h1 className='!text-4xl sm:!text-8xl'>The Culture</h1>
                <img
                 src='/oth/bengali_culture.png'
                 alt='bengali_culture'
                 width={800}
                 height={600}                   
                />

        <p className='w-100 sm:w-[50%] !text-2xl text-gray-400 text-justify '>Bengali culture is a vibrant 
            tapestry woven from centuries of tradition, intellect, and artistic brilliance. From the 
            soulful strains of Rabindra Sangeet to the grandeur of Durga Puja, from the poetic depths 
            of Tagore to the revolutionary spirit of its people—Bengal has shaped the cultural conscience 
            of a nation. Its cuisine, literature, music, cinema, festivals, and spirituality reflect a 
            harmonious blend of ancient heritage and modern thought. Rich in language, philosophy, and art, 
            Bengali culture is not just a regional identity—it is a profound expression of creativity, 
            resilience, and humanity.</p>

            <ButttonPrimary btnText='Explore Culture' src='/Culture' />
        </div>
      
    </>
  )
}

export default CultureSection
