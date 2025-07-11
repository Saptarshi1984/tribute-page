import React from 'react'
import { Card, Image, AspectRatio, Text} from "@chakra-ui/react"
import Link from 'next/link';
import { motion } from 'framer-motion';
import ButttonPrimary from './ButttonPrimary';

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
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Card.Root maxW="sm" overflow="hidden">
          <AspectRatio ratio = {4/3}>
          <Image
            w="sm"            
            src={imageSrc}
            alt={imageName}
            objectFit='cover'
          />
          </AspectRatio>
          <Card.Body gap="2">
            <Card.Title>{cardName}</Card.Title>
            <Card.Description>
              {cardDescription}
            </Card.Description>            
          </Card.Body>
          <Card.Footer gap="2" justifyItems="center" >
             <Link href={`/CultueData?name=${encodeURIComponent(cardName)}`} passHref>          
              <ButttonPrimary   btnText='Read More' src=''/>        
            </Link>
          </Card.Footer>
        </Card.Root>      
        </motion.div>
  )
}

export default DisplayCard
