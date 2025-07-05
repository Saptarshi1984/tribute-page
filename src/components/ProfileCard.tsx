import React from 'react'
import { useRouter } from 'next/navigation';
import { Button, Card, Text, Image, AspectRatio } from "@chakra-ui/react";
import Link from 'next/link';

interface ProfileCardProps {
  cardImageURL:string;  
  name: string;
  description: string;
  category: string;
}

const ProfileCard = ({cardImageURL, name, description, category }:ProfileCardProps) => {

  return (
    <div>
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
      
    </div>
  )
}

export default ProfileCard;
