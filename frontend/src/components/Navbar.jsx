import { Container } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <Container maxW={"100px"} px={4}>
    <Flex 
      h={6}
      alignItems={"center"}
      justifyContent={"space-between"}
      flesDir={{
        base: "column",
        sm: "row"
      }}
    >
    
    <Text
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
    >
      <Link to={"/"}>Product Store 🛒</Link>
    </Text>

    </Flex>

  </Container>
}

export default Navbar