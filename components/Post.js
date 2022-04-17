import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
const Post = () => {
  return (
    <Card sx={{margin: 5}} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2022"
    />
    <CardMedia
      component="img"
      height="15%"
      image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
     
    </CardActions>
   
  </Card>
  )
}

export default Post