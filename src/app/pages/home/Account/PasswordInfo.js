import { Card } from "react-bootstrap";
import { Button, Grid, Typography } from "@material-ui/core";
import { AccountInput } from "../components/Base";
import React from "react";

const PasswordInfo = () => (
  <Card className="mt-4">
    <Card.Header>
      <Typography variant="h5" component="h5">New Password</Typography>
    </Card.Header>
    <Card.Body>
      <Grid container spacing={1}>
        <AccountInput name="New Password" type="password"/>
        <AccountInput name="Confirm Password" type="password"/>
      </Grid>
    </Card.Body>
    <Card.Footer className="text-right">
      <Button variant="outlined" style={{marginRight: 5}}>RESET</Button>
      <Button variant="contained" color="primary">UPDATE</Button>
    </Card.Footer>
  </Card>
);

export default PasswordInfo;