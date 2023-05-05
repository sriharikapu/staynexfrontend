import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

const ProfileAccount = () => {
  return (
    <Box mt={3} >
      <Typography variant='h5' fontWeight="700" mb={2} >My Account</Typography>

      

      <Box border="1px solid lightgray" borderRadius="5px" p={4} >

      <Box display="flex" alignItems="center" justifyContent="space-between" borderBottom="1px solid lightgray" pb={2} >
        <Box>
          <Typography fontWeight="700" >Welcome, Bruno Fernandes</Typography>
          <Typography fontSize="14px" fontWeight="500" >Save to apply changes</Typography>
        </Box>
        <Avatar src='' alt='profile' />
      </Box>

      <Box display="flex" gap="20px" flexWrap="wrap" pt={2} >
        <Box>
          <Typography>First name</Typography>
          <input type='text' placeholder='First Name' className='profileinput' />
        </Box>

        <Box>
          <Typography>Last name</Typography>
          <input type='text' placeholder='Last name' className='profileinput' />
        </Box>

        <Box>
          <Typography>Gender</Typography>
          <input type='text' placeholder='Gender' className='profileinput' />
        </Box>

        <Box>
          <Typography>Passport number</Typography>
          <input type='text' placeholder='Passport number' className='profileinput' />
        </Box>

        <Box>
          <Typography>Email</Typography>
          <input type='text' placeholder='brunofernie@gmail.com' className='profileinput' />
        </Box>

        <Box>
          <Typography>Phone number</Typography>
          <input type='text' placeholder='Phone number' className='profileinput' />
        </Box>

        </Box>
        <Box mt={2} >
          <Button variant='contained' color='orange' sx={{color: '#fff'}} >Save</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileAccount