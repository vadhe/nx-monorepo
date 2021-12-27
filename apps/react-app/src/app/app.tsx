import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from '@chakra-ui/react'

const  App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box bg="red.500">Welcome to Meta Marksman LOL</Box>
    </ChakraProvider>
  )
}

export default App;