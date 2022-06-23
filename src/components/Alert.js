import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'

  export const ErrorAlert = ({ text}) => {
    return(
        <Alert status='error' transition={'ease-out 1s'}>
            <AlertIcon />
            {text}
        </Alert>        
    )
  }

  export const SuccessAlert = ({text}) => {
    return(
        <Alert status='success' transition={'ease-out 1s'}>
          <AlertIcon />
          {text}
        </Alert>
    )
  }