import {Card} from "react-bootstrap";
import {Header} from "../utils";
import {Grid, Typography} from "@material-ui/core";
import React from "react";

export default function RefundPolicy(props) {
  return (
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
          <Typography style={{marginTop: 10}}>*US <img src="https://as2.ftcdn.net/jpg/03/01/35/65/500_F_301356542_kIiLyNcHaQdQh9mnPN9PUEvX9ZSn3xdd.jpg" style={{width: 20}} alt="logo"/> Estern Standard Time</Typography>
          <Typography style={{marginTop: 25, fontSize: 15, fontWeight: 600}}>Our office location</Typography>
          <Typography style={{marginTop: 10}}>DigitalIPVoice, Inc</Typography>
          <Typography style={{marginTop: 10}}>13575 58TH ST N</Typography>
          <Typography style={{marginTop: 10}}>Cleanwater, FL 33760</Typography>
        </Card.Body>
      </Card>
    </Grid>
    )
};
