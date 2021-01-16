import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: props => props.drawerWidth
    }
  },
  appBarTitle: {
    marginLeft: props => props.drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

const AppBarComponent = props => {
  const { drawerToggleHandler } = props;
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={drawerToggleHandler}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Hidden xsDown implementation="css">
          <Typography variant="h6" noWrap>
            Bangkok Engineering - Station Log
          </Typography>
        </Hidden>
        <Hidden smUp implementation="css">
          <Typography variant="h6" noWrap>
            Station Log
          </Typography>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
