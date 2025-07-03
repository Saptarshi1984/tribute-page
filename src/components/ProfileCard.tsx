import React from 'react'
import { Button, Card, Image, Text } from "@chakra-ui/react";

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
      <Image
        src={cardImageURL}
        alt={name}
        objectFit={'cover'}
      />
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
        <Button variant="solid">Read More</Button>
        {/* <Button variant="ghost">Add to cart</Button> */}
      </Card.Footer>
    </Card.Root>
      
    </div>
  )
}

export default ProfileCard;
