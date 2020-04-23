import React from 'react';
import {Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core";
import {Card} from "react-bootstrap";
import {AccountInput} from "../components/Base";
import {Header} from "../utils";
import {BillingSystem} from "../ManageNumbers/LocalNumModal";

const AddFunds = ({open, onClose}) => {
  const [tab, setTab] = React.useState(0);
  const [values, setValues] = React.useState({});
  const [state, setState] = React.useState({
    email: false,
    phone: false,
  });

  const handleTab = (event, newValue) => setTab(newValue);

  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleCheck = name => event => {
    setState({...state, [name]: event.target.checked});
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle>Add Minutes to Number</DialogTitle>
      <DialogContent>
        <Grid item xs={12}>
          <Card>
            <Header>Prepay Amount</Header>
            <Card.Body>
              <AccountInput name="Total Amount" size={12} type="number"/>
            </Card.Body>
          </Card>
        </Grid>
        <BillingSystem tab={tab} onChange={handleChange} values={values} state={state} onCheck={handleCheck}
                       onTab={handleTab}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained" size="medium">SUBMIT</Button>
      </DialogActions>
    </Dialog>
  )
};

export default AddFunds;
