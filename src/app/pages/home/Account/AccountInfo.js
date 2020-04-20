import { Card } from "react-bootstrap";
import { Button, Grid, Typography } from "@material-ui/core";
import { AccountInput, AccountSelect } from "../components/Base";
import { countries, languages, payments, states } from "../utils";
import React from "react";

const AccountInfo = ({values, onChange}) => (
  <Card>
    <Card.Header>
      <Typography variant="h5" component="h5">Account Information</Typography>
    </Card.Header>
    <Card.Body>
      <Grid container spacing={1}>
        <AccountInput name="Username"/>
        <AccountInput name="Email Address"/>
        <AccountInput name="First Name" size={4}/>
        <AccountInput name="Middle Name" size={4}/>
        <AccountInput name="Last Name" size={4}/>
        <AccountInput name="Phone Number" type="tel"/>
        <AccountInput name="Address-1"/>
        <AccountInput name="Address-2" size={4}/>
        <AccountInput name="City" size={4}/>
        <AccountInput name="Zip Code" size={4} type="number"/>
        <AccountSelect value={values.country} onChange={onChange} name="country" options={countries} label="Country"/>
        <AccountSelect value={values.state} onChange={onChange} name="state" options={states} label="State"/>
        <AccountSelect value={values.payment} onChange={onChange} name="payment" options={payments} label="Payment Receipt"/>
        <AccountSelect value={values.language} onChange={onChange} name="language" options={languages} label="Language"/>
      </Grid>
    </Card.Body>
    <Card.Footer className="text-right">
      <Button variant="outlined" style={{marginRight: 5}}>RESET</Button>
      <Button variant="contained" color="primary">UPDATE</Button>
    </Card.Footer>
  </Card>
);

export default AccountInfo;