import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LockIcon from '@material-ui/icons/Lock';
import NumberOfPeople from './NumberOfPeople';
import NumberOfCars from './NumberOfCars';
import { Autocomplete } from '@material-ui/lab';
import { CardMedia } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Avatar } from '@material-ui/core';
import { positions } from '@material-ui/system';
import Chart from './Chart';
import Video from './Video';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        FPMOZ Mostar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#00437a',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'wrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    
   
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
   
    
   
  },
  fixedHeight: {
    height: 200,  
    width: 300,
  },

}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
     >
        
        <div className={classes.toolbarIcon}>
       <img style= {{position:'absolute', right:'45%'}}src="sum.png" /> 
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        
        
        <Divider />
          <div>
          <Link href="http://localhost:3000/home">
          <ListItem button>
              <ListItemIcon>
                <HomeIcon style={{ color: '#00437a' }}></HomeIcon>
              </ListItemIcon>
              <ListItemText secondary="Početna" />
            </ListItem>  
          </Link>
            
            <Link href="http://localhost:3000/profile" >
                <ListItem button  >
                  <ListItemIcon>
                    <PersonIcon style={{ color: '#00437a' }}></PersonIcon>
                  </ListItemIcon>
                  <ListItemText secondary="Profil" />
                </ListItem>
            </Link>
            
            
            <Link href="http://localhost:3000/login" >
                  <ListItem button>
                    <ListItemIcon>
                      <LockIcon style={{ color: '#00437a' }}></LockIcon>
                    </ListItemIcon>
                    <ListItemText secondary="Odjavite se" />
                  </ListItem>
              </Link>
          
           
          </div>
        </Drawer>

      <main className={classes.content} >
      <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{position:'flex'}}>
       
       
      
        <Grid item xs={12} md={4} lg={3} style={{marginTop:35}}>
              <Paper className={fixedHeightPaper}>
              <NumberOfPeople />
              </Paper>
            </Grid>
        <Grid item xs={12} md={4} lg={3} style={{marginTop:35}}>
              <Paper className={fixedHeightPaper}>
              <NumberOfCars />
              </Paper>
              
            </Grid>
        <Grid item xs={12} md={8} lg={9} className={classes.paper}
        style={{position:'absolute',width:800, height:750, marginLeft:600, Top:10}}>
                <Chart />
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
              <Paper className={classes.paper}style={{width:610,height:370}}>
                <Video/>
              </Paper>
            </Grid>

              
  
              
      
       </Grid>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{top:880, backgroundColor:'#00437a'}}>
        <Toolbar className={classes.toolbar}>
        <Box pt={4}
        style={{position: 'flex',
        color: '#fff',
        margin: 'auto',
        bottom: 30
        }}>
            
            <Copyright />
      </Box>
      </Toolbar>
      </AppBar>
      </Container>  
      
        
      </main>
    </div>
  );
}