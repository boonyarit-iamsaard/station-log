import { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import AppBarComponent from './shared/components/AppBarComponent';
import AppDrawerComponent from './shared/components/AppDrawerComponent';

import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerToggleHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarComponent
        drawerWidth={drawerWidth}
        drawerToggleHandler={drawerToggleHandler}
        width="240"
      />
      <AppDrawerComponent
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        drawerToggleHandler={drawerToggleHandler}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        Main content.
      </main>
    </div>
  );
};

export default App;
