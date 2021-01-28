import AppBar from '@material-ui/core/AppBar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from './AppLayout';
import logo from '../../assets/images/logo.png';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    '& h6': {
      fontWeight: 400
    }
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth})`
    }
  },
  appToolBar: {
    [theme.breakpoints.down('md')]: {
      minHeight: 56
    }
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(2)
  }
}));

const AppHeader = props => {
  const { onDrawerToggleHandler } = props;
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.appToolBar}>
        <IconButton
          edge="start"
          onClick={onDrawerToggleHandler}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Avatar variant="square" src={logo} className={classes.logo}></Avatar>
        <Hidden smUp implementation="css" className={classes.title}>
          <Typography variant="h6">Station Log</Typography>
        </Hidden>
        <Hidden xsDown implementation="css" className={classes.title}>
          <Typography variant="h6">
            Bangkok Engineering - Station Log
          </Typography>
        </Hidden>
        <Button color="inherit">
          <ExitToAppIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
