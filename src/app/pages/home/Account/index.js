import React from "react";
import { Grid } from "@material-ui/core";
import AccountInfo from "./AccountInfo";
import PasswordInfo from "./PasswordInfo";
import CardInfo from "./CardInfo";
import AutopayInfo from "./AutopayInfo";

export default function Account() {
  const [values, setValues] = React.useState({});
  const handleChange = (event) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [state, setState] = React.useState({
    email: false,
    phone: false,
  });

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={6}>
        <AccountInfo onChange={handleChange} values={values}/>
        <PasswordInfo/>
      </Grid>
      <Grid item lg={6}>
        <CardInfo onChange={handleChange} values={values} state={state} onCheck={handleCheck}/>
        <AutopayInfo onChange={handleChange} values={values}/>
      </Grid>
    </Grid>
  );
}
