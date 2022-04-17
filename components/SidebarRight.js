import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const SidebarRight = () => {
  return (
    <Box
      sx={{
        flex: '2',
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed" width={320}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format"
          />
          <Avatar alt="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=formatt" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SidebarRight;
