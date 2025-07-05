import React from 'react'
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

interface IntroCardProps {
    imageUrl: any;
    name: string;
    description: string;
}

const IntroCard = ({imageUrl, name, description}:IntroCardProps) => {
  return (
    <div>

         <Card.Root flexDirection="row" overflow="hidden" maxW="4xl">
    <Image
      objectFit="cover"
      maxW="200px"
      src= {imageUrl}
      alt="Caffe Latte"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">{name}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>

      
    </div>
  )
}

export default IntroCard
