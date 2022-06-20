import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  export const ErrorAlert = () => {
    return(
        <Alert status='error'>
            <AlertIcon />
            There was an error processing your request
        </Alert>        
    )
  }