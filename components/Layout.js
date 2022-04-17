import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
  styled,
  Box,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { Mail, Pets, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
  borderRadius: theme.shape.borderRadius,
}));
const StyledIconBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const StyleUserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#002984',
    },
    secondary: {
      main: '#ba000d',
    },
  },
});

const Layout = ({ children }) => {
    const [open ,setOpen] = useState(false)
  return (
    <>
      <Head>
        <title>Social app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" sx={{ backgroundColor: 'primary' }}>
          <StyledToolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Social
            </Typography>
            <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
            <StyledBox>
              <InputBase placeholder="Search..." />
            </StyledBox>
            <StyledIconBox>
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
              <Avatar onClick={(e)=>setOpen(true)} sx={{ width: 30, height: 30 }} />
            </StyledIconBox>
            <StyleUserBox onClick={(e)=>setOpen(true)}>
              <Avatar sx={{ width: 30, height: 30, cursor:'pointer' }} />
              <Typography variant="">Ramsir011</Typography>
            </StyleUserBox>
                  </StyledToolbar>
                  <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
     
                      open={open}
                      onClose={e=>setOpen(false)}
    
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
        <Box>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
