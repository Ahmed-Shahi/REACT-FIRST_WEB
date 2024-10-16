import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import  Header from '../Header/Header';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />      
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={()=>{setOpen(!open)}}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            <MenuIcon/>
          </IconButton>
        </DrawerHeader>
        <List>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={()=>{navigate('/')}}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                },
                open
                    ? {
                        justifyContent: 'initial',
                      }
                      : {
                          justifyContent: 'center',
                        },
                    ]}
                    >
                <ListItemIcon
                  sx={[
                      {
                          minWidth: 0,
                          justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: 'auto',
                        },
                  ]}
                >
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Home'
                  sx={[
                      open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                  />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={()=>{navigate('/revenue')}}
                
                sx={[
                    {
                    minHeight: 48,
                    px: 2.5,
                },
                open
                ? {
                    justifyContent: 'initial',
                }
                : {
                    justifyContent: 'center',
                },
                ]}
                >
                <ListItemIcon
                  sx={[
                    {
                        minWidth: 0,
                        justifyContent: 'center',
                    },
                    open
                    ? {
                        mr: 3,
                    }
                    : {
                        mr: 'auto',
                        },
                    ]}
                    >
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Revenue'
                  sx={[
                    open
                    ? {
                        opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                  />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={()=>{navigate('/task')}}
                sx={[
                    {
                    minHeight: 48,
                    px: 2.5,
                },
                open
                ? {
                    justifyContent: 'initial',
                }
                : {
                    justifyContent: 'center',
                },
                ]}
                >
                <ListItemIcon
                  sx={[
                      {
                          minWidth: 0,
                          justifyContent: 'center',
                        },
                        open
                        ? {
                            mr: 3,
                        }
                        : {
                            mr: 'auto',
                        },
                    ]}
                    >
                 <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary='Task'
                  sx={[
                    open
                    ? {
                          opacity: 1,
                        }
                        : {
                            opacity: 0,
                        },
                    ]}
                    />
              </ListItemButton>
            </ListItem>

        </List>
      </Drawer>
    </Box>
    
  );
}
