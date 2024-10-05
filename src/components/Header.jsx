import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import "./Header.css";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Sidebar content
  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => handleNavigation('/')}>
          <ListItemText primary="Subscribe" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/prediction')}>
          <ListItemText primary="Predict" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/dashboard')}>
          <ListItemText primary="Data Visualisation" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation('/tips')}>
          <ListItemText primary="General Tips" />
        </ListItem>
      </List>
      <Divider />
      {/* Add more list items if needed */}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Toggle sidebar on click
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            FarmIQ
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Hide buttons on mobile */}
            <Button color="inherit" size="large" onClick={() => handleNavigation('/')}>
              Subscribe
            </Button>
            {/* <Button color="inherit" size="large" onClick={() => handleNavigation('/prediction')}>
              Predict
            </Button> */}
            <Button color="inherit" size="large" onClick={() => handleNavigation('/dashboard')}>
              Data Visualisation
            </Button>
            <Button color="inherit" size="large" onClick={() => handleNavigation('/tips')}>
              General Tips
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
}