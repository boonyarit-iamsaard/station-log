import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import AppNavBar from './shared/components/AppNavBar';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#156665'
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },

  toolbar: {
    height: 48
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppNavBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          Main content.
        </main>
      </AppNavBar>
    </ThemeProvider>
  );
};

export default App;
