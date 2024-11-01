import React from 'react';
import { 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function ResponsiveDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, display: { sm: 'none' } }}
        onClick={handleToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240
          }
        }}
      >
        <List>
          {['Home', 'About', 'Contact'].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240
          }
        }}
      >
        <List>
          {['Home', 'About', 'Contact'].map((text, index) => (
            <ListItem key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;