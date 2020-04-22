import { Card } from "react-bootstrap";
import { TableCell, Typography } from "@material-ui/core";
import React from "react";

export const languages = [
  { name: 'English', value:'en', },
  { name: 'Spanish', value: 'sp' }
];

export const payments = [
  { name: 'Text Receipt', value: 'text'},
  { name: 'Email Receipt', value: 'email'}
];

export const states = [
  { name: 'None', value: 'none'},
];

export const countries = [
  { name: 'United States', value: 1},
  { name: 'Canada', value: 2},
  { name: 'Russia', value: 3},
  { name: 'Egypt', value: 4},
  { name: 'DR of Congo', value: 5},
  { name: 'South Africa', value: 6},
  { name: 'Greece', value: 7},
];

export const timezones = [
  { name: 'Pacific Time(US & Canada)', value: 1 },
  { name: 'Mountain Time(US & Canada)', value: 2 },
  { name: 'Central Time(US & Canada)', value: 3 },
  { name: 'Estern Time(US & Canada)', value: 4 },
  { name: 'Chinese Standard Time', value: 10 }
];

export const dateFormates = [
  { name: 'Minutes', value: 3 },
  { name: 'Seconds', value: 2 },
  { name: 'hh:mm:ss', value: 1 },
];

export const timeFormates = [
  { name: 'UTC', value: 1 },
  { name: 'Local', value: 2 },
];

export const localNumbers = [
  { name: '877-234-5464', value: 1},
  { name: '877-645-2423', value: 2},
];

export const serviceTypes = [
  { name: 'US or International Number', value: 1},
  { name: 'VoIP Connection(PBX)', value: 2},
  { name: 'Voice Mail', value: 3},
  { name: 'Fax Number', value: 4},
  { name: 'Fax to Email', value: 5},
  { name: 'Conference Bridge', value: 6},
  { name: 'VoIP Phone', value: 7},
  { name: 'Call Screening', value: 8},
];

export const minutes = [
  { name: "100", value: 1},
  { name: "200", value: 2},
  { name: "300", value: 3},
];

export const npas = [
  "800", "833", "844", "855", "866", "877", "888"
];

export const Header = (props) => (
  <Card.Header><Typography style={{fontWeight: 600, fontSize: 13}}>{props.children}</Typography></Card.Header>
);

// Set mui datatable cell header to center
export const CellCenterHeader = ({value}) => (
  <TableCell style={{textAlign: 'center'}} key={value + Math.random() + 100000}>{value}</TableCell>
);
