'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button, Card, Text, Image, AspectRatio } from "@chakra-ui/react";
import Link from 'next/link';
import { motion } from 'framer-motion';


interface ProfileCardProps {
  cardImageURL:string;  
  name: string;
  description: string;
  category: string;
}

const ProfileCard = ({cardImageURL, name, description, category }:ProfileCardProps) => {

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
         <Link href={`/Biodata?name=${encodeURIComponent(name)}`} passHref>
        <Button variant="solid">Know More</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
      
    </motion.div>
  )
}

export default ProfileCard;
