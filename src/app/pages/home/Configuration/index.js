import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  Button,
  makeStyles
} from "@material-ui/core";
import {ExpandMore} from '@material-ui/icons';
import { AccountSelect } from "../components/Base";
import { dateFormates, timeFormates, timezones } from "../utils";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(20),
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Configuration() {

  const classes = useStyles();
  const [values, setValues] = React.useState({});
  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <Grid>
      <Grid item xs={12} sm={6}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls="timezone"
            id="timezone"
          >
            <Typography className={classes.heading}>Timezone Setting</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid item xs={12} sm={12}>
              <AccountSelect value={values.timezone} onChange={handleChange} name="timezone" options={timezones} label="Timezone" size={12}/>
              <AccountSelect value={values.dateFormat} onChange={handleChange} name="dateFormat" options={dateFormates} label="Duration Format" size={12}/>
              <AccountSelect value={values.timeFormat} onChange={handleChange} name="timeFormat" options={timeFormates} label="Dashboard Time Format" size={12}/>
              <Grid container justify="flex-end">
                <Button variant="outlined" className={classes.button}>RESET</Button>
                <Button variant="contained" className={classes.button} color="primary">UPDATE</Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}
