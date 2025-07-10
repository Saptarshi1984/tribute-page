import React from 'react'
import { Card, Image, AspectRatio} from "@chakra-ui/react"
import { motion } from 'framer-motion';

interface DisplayCardProps {
    cardDescription: string;
    cardName: string;
    imageSrc: string;
    imageName: string;
}

const DisplayCard = ({cardName, cardDescription, imageSrc, imageName}: DisplayCardProps)=> {
  return (
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.2 }}
     transition={{ duration: 0.6, ease: 'easeIn' }} 
      >

    <Card.Root maxW="sm">
      <AspectRatio ratio = {4/3}>
      <Image        
        src={imageSrc}
        alt={imageName}        
        objectFit={'cover'}
        borderRadius={'md'}        
      />
      </AspectRatio>
      <Card.Body gap="2" >
        <Card.Title className='!text-sm'>{cardName}</Card.Title>
        <Card.Description className='!text-xs'>
          {cardDescription}
        </Card.Description>        
      </Card.Body>      
    </Card.Root>
      
    </motion.div>
  )
}

export default DisplayCard
