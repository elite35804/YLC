import { FormControl, Grid, InputLabel, MenuItem, Input, Select, TextField } from "@material-ui/core";
import React from "react";

export const AccountInput = ({name, size=6, children, type="string", ...props}) => (
  <Grid item xs={12} sm={size} {...props}>
    <TextField
      label={name}
      margin="none"
      fullWidth
      type={type}
    />
    {children}
  </Grid>
);

export const AccountSelect = ({value, onChange, name, options, label, size=6}) => (
  <Grid item xs={12} sm={size}>
    <FormControl  margin="dense" fullWidth>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        input={<Input name={name} id={name} />}
      >
        {options.map(o =>
          <MenuItem value={o.value || o}>{o.name || o}</MenuItem>
        )}
      </Select>
    </FormControl>
  </Grid>
)