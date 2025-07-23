"use client"
import React from 'react'
import { Card, AspectRatio, Text} from "@chakra-ui/react"
import Image from 'next/image';
import Link from 'next/link';
import ButttonPrimary from './ButttonPrimary';

interface DisplayCardProps {

    cardDescription: string;
    cardName: string;
    imageSrc: string;   
}

const DisplayCard = ({cardName, cardDescription, imageSrc}: DisplayCardProps)=> {
  return (
    
    <div>
          <Card.Root minW="sm" overflow="hidden">
  <AspectRatio ratio={4 / 3}>
    <Image
      width={400}
      height={400}
      src={imageSrc}
      alt={cardName}
      loading="lazy"
    />
  </AspectRatio>
  <Card.Body gap="2">
    <Card.Title>{cardName}</Card.Title>
    <Card.Description>
      {cardDescription}
    </Card.Description>
  </Card.Body>
  <Card.Footer gap="2">
    <Link href={`/CultueData?name=${encodeURIComponent(cardName)}`} passHref>
      <ButttonPrimary btnText="Read More" src="" />
    </Link>
  </Card.Footer>
</Card.Root>
      
        </div>
  )
}

export default DisplayCard
