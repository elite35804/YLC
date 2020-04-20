import { Card } from "react-bootstrap";
import { Button, FormControlLabel, Grid, Switch, Typography } from "@material-ui/core";
import { AccountInput, AccountSelect } from "../components/Base";
import React from "react";
import { countries } from "../utils";

const AutopayInfo = ({values, onChange}) => (
  <Card className="mt-4">
    <Card.Header>
      <Typography variant="h5" component="h5">Autopay Information</Typography>
    </Card.Header>
    <Card.Body>
      <Grid container spacing={1}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Allow Auto Payment:"
          labelPlacement="start"
        />
        <AccountSelect value={values.country} onChange={onChange} name="country" options={countries} label="Country" size={12}/>
        <AccountInput name="Amount"/>
        <AccountInput name="Inmate BOP"/>
      </Grid>
    </Card.Body>
    <Card.Footer className="text-right">
      <Button variant="outlined" style={{marginRight: 5}}>RESET</Button>
      <Button variant="contained" color="primary">UPDATE</Button>
    </Card.Footer>
  </Card>
);

export default AutopayInfo;