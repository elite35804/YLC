import React from "react";
import {
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import {Card} from "react-bootstrap";
import {AccountInput} from "../components/Base";
import {Header} from "../utils";
import {BillingSystem} from "../ManageNumbers/LocalNumModal";


const QuickPay = ({open, onClose}) => {
  const [tab1, setTab1] = React.useState(0);
  const handleTab1 = (event, newValue) => setTab1(newValue);
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
        <Grid item xs={12} sm={6}>
          <Card>
            <Header>Refund Policy</Header>
            <Card.Body>
              <Typography style={{marginTop: 10}}>Our refund policy is simple. If you are unhappy for any reason YLC will refund 100% of the amount you paid less what has been used.</Typography>
              <Typography style={{marginTop: 10}}>If you are unhappy due to service difficulties YLC will refund 100% of the amount that you paid.</Typography>
              <Typography style={{marginTop: 25, fontSize: 15, fontWeight: 600}}>To process a refund it is simple</Typography>
              <Typography style={{marginTop: 10}}>Simply call our support line during normal business hours listed below and cancel your service, It's Hassle free and takes about 3 min.</Typography>
              <Typography style={{marginTop: 10}}><i className="fa fa-phone"/>&nbsp;&nbsp;1 (855)-952-5060</Typography>
              <Typography style={{marginTop: 10}}>Monday thru Friday - 10 AM until 8 PM</Typography>
              <Typography style={{marginTop: 10}}>Saturday - 11 AM until 7 PM</Typography>
              <Typography style={{marginTop: 10}}>Sunday - 12 AM until 6 PM</Typography>
              <Typography style={{marginTop: 10}}>*US <img src={"https://as2.ftcdn.net/jpg/03/01/35/65/500_F_301356542_kIiLyNcHaQdQh9mnPN9PUEvX9ZSn3xdd.jpg"} style={{width: 20}} alt="logo"/> Estern Standard Time</Typography>
              <Typography style={{marginTop: 25, fontSize: 15, fontWeight: 600}}>Our office location</Typography>
              <Typography style={{marginTop: 10}}>DigitalIPVoice, Inc</Typography>
              <Typography style={{marginTop: 10}}>13575 58TH ST N</Typography>
              <Typography style={{marginTop: 10}}>Cleanwater, FL 33760</Typography>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BillingSystem tab={tab1} onChange={handleChange} values={values} state={state} onCheck={handleCheck}
                         onTab={handleTab1} noMargin/>
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
