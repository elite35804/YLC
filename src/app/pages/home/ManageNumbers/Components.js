import {
  Avatar,
  Chip,
  Fab,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography
} from "@material-ui/core";
import { npas } from "../utils";
import React from "react";
import { AccountInput, AccountSelect } from "../components/Base";

const getStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));


export const TollFree = ({radio, onChange}) => (
  <Grid container spacing={1}>
    <Grid item xs={1}/>
    <RadioGroup
      name="npa"
      value={radio}
      style={{ marginTop: 10 }}
      onChange={onChange}
    >
      {npas.map(n => (
        <FormControlLabel value={n} control={<Radio/>} label={`(${n}) Toll Free Number`}
                          color="secondary" style={{marginBottom: 0}}/>))
      }
    </RadioGroup>
  </Grid>
);

export const VanityTollFree = ({onChange, values}) => (
  <Grid container spacing={2}>
    <Typography className="ml-5 mb-2 mt-5">Enter any combination of letters, numbers or Wildcards (the * symbol)</Typography>
    <Grid container xs={12} sm={12} spacing={5} className="ml-3">
      <AccountSelect onChange={onChange} size={1} options={npas} value={values.npa} label="NPA" name="npa"/>
      <div className="col-sm-3" style={{marginTop: 40}} >
        <AccountInput name="" type="number" size={12}/>
      </div>
      <Fab color="primary" aria-label="Add" size="small" style={{marginTop: 35, marginLeft: 10}}>
        <i className="fa fa-search"/>
      </Fab>
      <Grid xs={12} sm={7} className="ml-5 mb-5">
        <Typography variant="h5" component="h5" style={{marginTop: 40}}>Search Tips</Typography>
        <Typography style={{marginTop: 10}}>Looking for a vanity number for your Las Vegas based realty company? Enter "DIPVTEL" and click Search.</Typography>
        <Typography style={{marginTop: 10}}>Looking for a toll free number that matches your office number? Enter the 7 digit number in the number field (e.g. 5551212) and click Search.</Typography>
        <Typography style={{marginTop: 10}}>Enter "DOG" to search for a toll free number that contains the text "DOG".</Typography>
        <Typography style={{marginTop: 10}}>Enter "0000" to search for a toll free number that contains 4 contiguous zeros.</Typography>
        <Typography style={{marginTop: 10}}>Enter * to match any digit.</Typography>
        <Typography style={{marginTop: 10}}>Enter & to repeat a digit. (e.g. &&& finds numbers where 3 numbers repeat; &0&0&0 finds any number like 707070 or 808080).</Typography>
        <Typography style={{marginTop: 10}}>Click button to look for numbers that you want.</Typography>
      </Grid>
    </Grid>
  </Grid>
);

export const CarrierTollFree = ({onChange, values}) => (
  <Grid container spacing={2}>
    <Grid xs={12} sm={4}/>
    <Grid xs={12} sm={4}>
      <Typography className="mb-2 mt-5" align="center">Enter any toll free number to search carrier</Typography>
      <Grid container xs={12} sm={12} spacing={5} justify="center">
        <AccountSelect onChange={onChange} size={4} options={npas} value={values.npa} label="NPA" name="npa"/>
        <div className="col-sm-6" style={{marginTop: 40}} >
          <AccountInput name="" type="number" size={12}/>
        </div>
        <Fab color="primary" aria-label="Add" size="small" style={{marginTop: 35, marginLeft: 10}}>
          <i className="fa fa-search"/>
        </Fab>
      </Grid>
    </Grid>
    <Grid xs={12} sm={4}/>
  </Grid>
);

export const HeaderButton = ({onClick, color="secondary", label, icon}) => {
  const classes = getStyles();
  return (
  <Chip
    size="small"
    avatar={<Avatar><i className={icon}/></Avatar>}
    label={<Typography>{label}</Typography>}
    variant="outlined"
    onClick={onClick}
    className={classes.chip}
    color={color}
  />
)};