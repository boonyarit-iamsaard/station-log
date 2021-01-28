import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import AppDrawerList from './AppDrawerList';

import { drawerWidth } from './AppLayout';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      minHeight: 56
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 64
    }
  }
}));

const AppDrawer = props => {
  const { drawerOpen, onDrawerToggleHandler, window } = props;
  const classes = useStyles();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer}>
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={onDrawerToggleHandler}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <AppDrawerList />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar} />
          <AppDrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default AppDrawer;
