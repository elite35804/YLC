import React from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, Tabs, Tab } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { AccountInput, AccountSelect } from "../components/Base";
import { countries, Header, localNumbers, minutes, serviceTypes, states } from "../utils";
import { CardDetailInfo } from "../Account/CardInfo";

const LocalNumModal = ({open, onClose}) => {
  const [tab, setTab] = React.useState(1);
  const [tab1, setTab1] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [state, setState] = React.useState({
    email: false,
    phone: false,
  });

  const handleTab = (event, newValue) => setTab(newValue);
  const handleTab1 = (event, newValue) => setTab1(newValue);

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>Setup New Local Number</DialogTitle>
      <DialogContent>
        <Card className="mb-1">
          <Header>Search Numbers</Header>
          <Card.Body>
            <Tabs value={tab} indicatorColor="primary" textColor="primary" onChange={handleTab}>
              <Tab label="Search By Facility Location" />
              <Tab label="Search By Country, State" />
            </Tabs>
            <Grid container spacing={1}>
              {tab === 1 && <AccountSelect onChange={handleChange} value={values.country} name="country" label="Country" options={countries} size={3}/>}
              {tab === 1 && <AccountSelect onChange={handleChange} value={values.state} name="state" label="State" options={states} size={3}/>}
              {tab === 1 && <AccountInput name="Area Code" size={3} style={{marginTop: 5}}/>}
              {tab === 1 && <AccountInput name="City" size={3} style={{marginTop: 5}}/>}
              {tab === 0 && <AccountInput name="Facility Location" style={{marginTop: 5}}/>}
            </Grid>
          </Card.Body>
          <Card.Footer className="text-right">
            <Button color="primary" size="small" variant="contained">SEARCH</Button>
          </Card.Footer>
        </Card>
        <Grid spacing={1} container>
          <Grid item xs={12} sm={6}>
            <Card>
              <Header>Setup Local Number</Header>
              <Card.Body>
                <Grid container spacing={3}>
                  <AccountSelect onChange={handleChange} value={values.local_number} name="local_number" label="Local Number" options={localNumbers} size={4}/>
                  <AccountSelect onChange={handleChange} value={values.service_type} name="service_type" label="Service Type" options={serviceTypes} size={8}/>
                </Grid>
                <AccountInput name="Description" size={12}/>
              </Card.Body>
            </Card>
          </Grid>
          <NumberFee onChange={handleChange} values={values}/>
        </Grid>
        <BillingSystem tab={tab1} onChange={handleChange} values={values} state={state} onCheck={handleCheck} onTab={handleTab1}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained" size="medium">SUBMIT</Button>
      </DialogActions>
    </Dialog>
  )
};

export const NumberFee = ({onChange, values, isAdd}) => (
  <Grid item xs={12} sm={6}>
    <Card>
      <Header>Number Fee Setting</Header>
      <Card.Body>
        <Grid container xs={12} spacing={1} justify="center">
          <AccountSelect onChange={onChange} value={values.minutes} name="minutes" label="Minutes" options={minutes} size={3}/>
          <AccountInput name="PPM" size={2} type="number" style={{marginTop: 5}}/>
          <AccountInput name="Setup Fee" size={4} type="number" style={{marginTop: 5}}/>
          {!isAdd && <AccountInput name="Monthly Fee" size={3} type="number" style={{marginTop: 5}}/>}
        </Grid>
      </Card.Body>
    </Card>
  </Grid>
);

export const BillingSystem = ({tab, onChange, values, state, onCheck, onTab, noMargin}) => (
  <Card className={!noMargin && "mt-1"}>
    <Header>Provide Your Billing Details</Header>
    <Card.Body>
      <Tabs value={tab} indicatorColor="primary" textColor="primary" onChange={onTab}>
        <Tab label="Pay via Update CreditCard" />
        <Tab label="Pay via PayPal" />
        <Tab label="Pay via Balance" />
      </Tabs>
      <Grid container spacing={1}>
        {tab !== 2 && <CardDetailInfo onChange={onChange} values={values} state={state} onCheck={onCheck}/>}
      </Grid>
    </Card.Body>
  </Card>
);

export default LocalNumModal;
