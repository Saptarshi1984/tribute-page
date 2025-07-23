import Image from 'next/image'
import React from 'react'
import ButttonPrimary from './ButttonPrimary'

const LanguageSection = () => {
  return (

        <div className='w-auto !flex flex-col gap-6 !justify-around items-center h-screen'>
        <h1 className='!text-4xl sm:!text-8xl'>A Rich Language </h1>
        <Image 
         src='/oth/learn_bengali.png'
         alt='learn_bengali'
         width={400}
         height={600}
          />
        <p className='w-auto sm:w-[50%] sm:!text-2xl text-gray-400 text-justify !mx-4'>The Bengali language, with its lyrical 
          beauty and expressive depth, is a gateway to a vast ocean of literature, music, and cultural wisdom. 
          As the mother tongue of legends like Rabindranath Tagore, Kazi Nazrul Islam, and Satyajit Ray, Bengali 
          carries within it a tradition of poetic brilliance, revolutionary thought, and profound humanism. 
          Through its words flow centuries of storytelling, soulful melodies like Rabindra Sangeet, and 
          philosophical reflections on life and society. Learning Bengali not only connects you to one of the 
          richest literary heritages in the world but also offers a deep understanding of a culture that 
          celebrates intellect, emotion, and artistic freedom. Whether you're exploring Tagore’s verses or 
          understanding the rhythm of Bengali folk songs, the language becomes a key to experiencing the spirit 
          of Bengal in its truest form.</p>

          <ButttonPrimary btnText='Learn Bengali' src='/LearnBengali' />
          
        </div>

        
      

  )
}

export default LanguageSection
