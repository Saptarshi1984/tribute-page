'use client'
import React from 'react'
import { Card, Text, AspectRatio } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';
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
    <div>
      <Card.Root maxW="sm" overflow="hidden">
      <AspectRatio ratio = {4/3}>
      <Image
        width={400}
        height={400}
        src={cardImageURL}
        alt={name}
        loading='lazy'        
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
         <Link href={`People/${slug}`}>          
          <ButttonPrimary btnText='Know More' src='' />        
        </Link>
      </Card.Footer>
    </Card.Root>      
    </div>
  )
}

export default ProfileCard;
