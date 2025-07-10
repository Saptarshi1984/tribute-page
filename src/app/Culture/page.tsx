'use client';

import React from 'react';
import Image from 'next/image';
import culture from '@/data/culture.json';
import { Heading, SimpleGrid} from '@chakra-ui/react';
import DisplayCard from '@/components/DisplayCard';
import Navbar from '@/components/Navbar';


const CulturePage = () => {
  return (
    <div      
    className='w-[100%] h-screen flex flex-col gap-[4rem] items-center justify-around '>
      <Navbar />
      {culture.map((row, i) => (
        <div        
        key={i} className='flex flex-col gap-4 items-center'>                        
         
         
          <Image
            className=' rounded-xl'
            alt='culture_main_image'
            src={row.mainImgSrc}
            width={1200}
            height={800}                       
          />      
          
          
          {/* FESTIVALS SECTION */}
          {row.festivalRow.map((festivalBlock, j) => (
            <div key={j} className='w-full px-10 flex flex-col gap-4'>
              <Heading size="xl" className='my-4'>{festivalBlock.rowHeading}</Heading>
              <SimpleGrid columns={[1, 2, 3]} gap={4}>
                {festivalBlock.festivals.map((festival, index) => (
                  <DisplayCard
                    key={index}
                    cardName={festival.festivalName}
                    cardDescription={festival.festivalText}
                    imageSrc={festival.festivalImage}
                    imageName={festival.festivalName}
                  />
                ))}
              </SimpleGrid>
            </div>
          ))}

             {/* MUSIC SECTION */}
            {row.musicRow.map((musicBlock, k) => (
            <div key={k} className='w-full px-10 flex flex-col gap-4'>
              <Heading size="xl" className='my-4'>{musicBlock.rowHeading}</Heading>
              <SimpleGrid columns={[1, 2, 3]} gap={4}>
                {musicBlock.musicCategory.map((music, index) => (
                  <DisplayCard
                    key={index}
                    cardName={music.musicName}
                    cardDescription={music.musicText}
                    imageSrc={music.musicImage}
                    imageName={music.musicName}
                  />
                ))}
              </SimpleGrid>
            </div>
          ))}

          {/* FOOD SECTION */}
          {row.foodRow.map((foodBlock, j) => (
            <div key={j} className='w-full px-10 flex flex-col gap-4'>
              <Heading size="xl" className='my-4'>{foodBlock.rowHeading}</Heading>
              <SimpleGrid columns={[1, 2, 3]} gap={4}>
                {foodBlock.foodCategory.map((food, index) => (
                  <DisplayCard
                    key={index}
                    cardName={food.foodName}
                    cardDescription={food.foodText}
                    imageSrc={food.foodImage}
                    imageName={food.foodName}
                  />
                ))}
              </SimpleGrid>
            </div>
          ))}

        </div>
      ))}
    </div>
  );
};

export default CulturePage;
