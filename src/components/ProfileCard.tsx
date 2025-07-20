'use client'
import React from 'react'
import { Card, Text, Image, AspectRatio } from "@chakra-ui/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import ButttonPrimary from './ButttonPrimary';



interface ProfileCardProps {

  cardImageURL:string;  
  name: string;
  description: string;
  category: string;
  slug: string;
}

const ProfileCard = ({cardImageURL, name, description, category, slug }:ProfileCardProps) => {

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
        w ='sm'
        src={cardImageURL}
        alt={name}
        objectFit='cover'
      />
      </AspectRatio>
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {category}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        {/* {`/Biodata?name=${encodeURIComponent(name)}`} */}
         <Link href={`People/${slug}`}>          
          <ButttonPrimary btnText='Know More' src='' />        
        </Link>
      </Card.Footer>
    </Card.Root>      
    </motion.div>
  )
}

export default ProfileCard;
