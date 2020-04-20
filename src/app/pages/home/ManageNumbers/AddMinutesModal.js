import React from 'react';
import { Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { AccountInput, AccountSelect } from "../components/Base";
import { Header, localNumbers, serviceTypes } from "../utils";
import { BillingSystem, NumberFee } from "./LocalNumModal";

const AddMinutesModal = ({open, onClose}) => {
  const [tab1, setTab1] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [state, setState] = React.useState({
    email: false,
    phone: false,
  });

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
      <DialogTitle>Add Minutes to Number</DialogTitle>
      <DialogContent>
        <Grid spacing={1} container>
          <Grid item xs={12} sm={6}>
            <Card>
              <Header>Number Details</Header>
              <Card.Body>
                <Grid container spacing={3}>
                  <AccountSelect onChange={handleChange} value={values.local_number} name="local_number" label="Local Number" options={localNumbers} size={4}/>
                  <AccountSelect onChange={handleChange} value={values.service_type} name="service_type" label="Service Type" options={serviceTypes} size={8}/>
                </Grid>
                <AccountInput name="Description" size={12}/>
              </Card.Body>
            </Card>
          </Grid>
          <NumberFee onChange={handleChange} values={values} isAdd/>
        </Grid>
        <BillingSystem tab={tab1} onChange={handleChange} values={values} state={state} onCheck={handleCheck} onTab={handleTab1}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained" size="medium">SUBMIT</Button>
      </DialogActions>
    </Dialog>
  )
};

export default AddMinutesModal;