
import { Box } from '@mui/material'
import React from 'react'
import AddIcon from './AddIcon'
import Post from './Post'



const Feed = () => {
  return (
      <Box sx={{  flex: '4' }}>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
          <Post />
      
    </Box>
  )
}

export default Feed