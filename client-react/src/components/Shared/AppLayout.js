import { useState } from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppHeader from './AppHeader';
import AppDrawer from './AppDrawer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006564'
    },
    secondary: {
      main: '#c1b49a'
    },
    error: {
      main: '#a51e36'
    }
  }
});

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      minHeight: 56
    },
    [theme.breakpoints.up('md')]: {
      minHeight: 64
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    }
  }
}));

const AppLayout = props => {
  const classes = useStyle();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onDrawerToggleHandler = () => setDrawerOpen(!drawerOpen);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader onDrawerToggleHandler={onDrawerToggleHandler} />
        <AppDrawer
          drawerOpen={drawerOpen}
          onDrawerToggleHandler={onDrawerToggleHandler}
        />
        <main className={classes.content}>{props.children}</main>
      </div>
    </ThemeProvider>
  );
};

export const drawerWidth = 240;

export default AppLayout;
