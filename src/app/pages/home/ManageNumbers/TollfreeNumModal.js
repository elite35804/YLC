import React from "react";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Card } from "react-bootstrap";
import { AccountSelect } from "../components/Base";
import { Header, localNumbers, serviceTypes } from "../utils";
import { BillingSystem, NumberFee } from "./LocalNumModal";
import { CarrierTollFree, TollFree, VanityTollFree } from "./Components";

const TollfreeNumModal = ({ open, onClose }) => {
  const [tab, setTab] = React.useState(0);
  const [tab1, setTab1] = React.useState(0);
  const [radio, setRadio] = React.useState("");
  const handleTab = (event, newValue) => setTab(newValue);
  const handleTab1 = (event, newValue) => setTab1(newValue);
  const handleRadio = e => setRadio(e.target.value);
  const [values, setValues] = React.useState({});
  const [state, setState] = React.useState({
    email: false,
    phone: false
  });

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
      <DialogTitle>Setup New Toll Free Number</DialogTitle>
      <DialogContent>
        <Card className="mb-1">
          <Header>Choose Numbers</Header>
          <Card.Body>
            <Tabs value={tab} indicatorColor="primary" textColor="primary" onChange={handleTab}>
              <Tab label="Toll Free Number"/>
              <Tab label="Vanity Toll Free Number"/>
              <Tab label="Toll Free Carrier"/>
            </Tabs>
            {tab === 0 && <TollFree onChange={handleRadio} radio={radio}/>}
            {tab === 1 && <VanityTollFree onChange={handleChange} values={values}/>}
            {tab === 2 && <CarrierTollFree onChange={handleChange} values={values}/>}
          </Card.Body>
        </Card>
        <Grid spacing={1} container>
          <Grid item xs={12} sm={6}>
            <Card>
              <Header>Setup Toll Free Number</Header>
              <Card.Body>
                <Grid container spacing={3}>
                  <AccountSelect onChange={handleChange} value={values.tollfree_number} name="tollfree_number"
                                 label="Toll Free Number" options={localNumbers} size={4}/>
                  <AccountSelect onChange={handleChange} value={values.service_type} name="service_type"
                                 label="Service Type" options={serviceTypes} size={8}/>
                </Grid>
              </Card.Body>
            </Card>
          </Grid>
          <NumberFee onChange={handleChange} values={values}/>
        </Grid>
        <BillingSystem tab={tab1} onChange={handleChange} values={values} state={state} onCheck={handleCheck}
                       onTab={handleTab1}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained" size="medium">SUBMIT</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TollfreeNumModal;