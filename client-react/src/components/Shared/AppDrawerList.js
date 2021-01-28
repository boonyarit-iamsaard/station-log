import Divider from '@material-ui/core/Divider';
import FlightIcon from '@material-ui/icons/Flight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItemIcon: {
    minWidth: 0,
    marginRight: theme.spacing(2)
  }
}));

const AppDrawerList = () => {
  const classes = useStyles();
  const listItem = [{ text: 'Flight' }, { text: 'Spare Part' }];

  return (
    <div>
      <Divider />
      <List>
        {listItem.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon className={classes.listItemIcon}>
              {index % 2 === 0 ? <FlightIcon /> : <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AppDrawerList;
