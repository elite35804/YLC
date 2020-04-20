import { Card } from "react-bootstrap";
import { Button, Checkbox, FormControlLabel, Grid, Typography } from "@material-ui/core";
import { AccountInput, AccountSelect } from "../components/Base";
import React from "react";
import { countries, states } from "../utils";

const CardInfo = ({onChange, values, state, onCheck}) => (
  <Card>
    <Card.Header>
      <Typography variant="h5" component="h5">CreditCard Information</Typography>
    </Card.Header>
    <Card.Body>
      <CardDetailInfo onChange={onChange} values={values} state={state} onCheck={onCheck}/>
    </Card.Body>
    <Card.Footer className="text-right">
      <Button variant="outlined" style={{marginRight: 5}}>RESET</Button>
      <Button variant="contained" color="primary">UPDATE</Button>
    </Card.Footer>
  </Card>

);

export const CardDetailInfo = ({onChange, values, state, onCheck}) => (
  <Grid container spacing={1}>
    <AccountInput name="Email Address">
      <FormControlLabel
        control={
          <Checkbox checked={state.email} color="primary"
                    onChange={onCheck('email')} value="checkedF"/>
        }
        label="Use Person's Email Address"/>
    </AccountInput>
    <AccountInput name="Phone Number" type="tel">
      <FormControlLabel
        control={
          <Checkbox checked={state.phone} color="primary"
                    onChange={onCheck('phone')} value="phone"/>
        }
        label="Use Person's Phone Number"/>
    </AccountInput>
    <AccountInput name="CardHolder Name" size={3}/>
    <AccountInput name="Card Number" size={3}/>
    <AccountInput name="Expiration" size={3}/>
    <AccountInput name="CVC" size={3}/>
    <AccountInput name="Billing Address" size={4}/>
    <AccountInput name="City" size={4}/>
    <AccountInput name="Zip Code" size={4} type="number"/>
    <AccountSelect value={values.country} onChange={onChange} name="country" options={countries} label="Country"/>
    <AccountSelect value={values.state} onChange={onChange} name="state" options={states} label="State"/>
  </Grid>
);

export default CardInfo;