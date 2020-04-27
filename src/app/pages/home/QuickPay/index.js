import React from "react";
import {Grid, Button} from "@material-ui/core";
import {Card} from "react-bootstrap";
import {AccountInput} from "../components/Base";
import {Header} from "../utils";
import {BillingSystem} from "../ManageNumbers/LocalNumModal";
import RefundPolicy from "./RefundPolicy";

const QuickPay = (props) => {
  const [tab1, setTab1] = React.useState(0);
  const handleTab1 = (event, newValue) => setTab1(newValue);
  const [state, setState] = React.useState({
    email: false,
    phone: false
  });
  const [values, setValues] = React.useState({});

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
    <Grid>
      <Grid spacing={1} container>
        <Grid item xs={12}>
          <Card>
            <Header>Search Inmate</Header>
            <Card.Body>
              <Grid container spacing={3}>
                <AccountInput size={4} name="First Name"/>
                <AccountInput size={4} name="Last Name"/>
                <AccountInput size={4} name="BOP Number" type="number"/>
              </Grid>
            </Card.Body>
            <Card.Footer className="text-right">
              <Button color="primary" size="small" variant="contained">SEARCH</Button>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Header>Select Inmate</Header>
            <Card.Body>
            </Card.Body>
          </Card>
        </Grid>
        <RefundPolicy/>
        <Grid item xs={12} sm={6}>
          <BillingSystem tab={tab1} onChange={handleChange} values={values} state={state} onCheck={handleCheck} onTab={handleTab1} noMargin/>
          <Card>
            <Header>Setup Amount</Header>
            <Card.Body>
              <AccountInput size={12} name="Total Amount" type="number"/>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuickPay;
