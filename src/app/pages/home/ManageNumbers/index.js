import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import { Typography, Grid, IconButton, MenuItem, Menu } from "@material-ui/core";
import { MoreVert} from "@material-ui/icons";
import { Badge } from "react-bootstrap";
import "./index.css";
import CallLogModal from "./CallLogModal";
import LocalNumModal from "./LocalNumModal";
import TollfreeNumModal from "./TollfreeNumModal";
import { CellCenterHeader } from "../utils";
import AddMinutesModal from "./AddMinutesModal";
import { HeaderButton } from "./Components";

export default function ManageNumbers() {
  const [open, setOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  const [tollOpen, setTollOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = (type) => {
    if (type === "a")
      setAddOpen(true);
    setAnchorEl(null);
  };

  const columns = [
    { name: "service_type", label: "Service Type" },
    {
      name: "number", label: "Number", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div style={{textAlign: 'center', minWidth: 80}}><a href={`facetime:${value}`}>{value}</a></div>
      }
    },
    {
      name: "destination_number", label: "Destination Number", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div style={{textAlign: 'center', minWidth: 80}}><a href={`facetime:${value}`}>{value}</a></div>
      }
    },
    {
      name: "status", label: "Status", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div style={{textAlign: 'center', minWidth: 70}}>
            <Badge pill variant={value === "success" ? "success": "warning"} style={{fontWeight: 'bold', color: 'white'}}>
              {value.toUpperCase()}
            </Badge></div>
        )
      }
    },
    { name: "description", label: "Description" },
    { name: "billing_ended", label: "Billing Ended" },
    { name: "spent", label: "Spent", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <Grid container justify="center" style={{minWidth: 100}}>
            <Badge pill variant="primary">{value}min</Badge>
            <Typography>&nbsp;/&nbsp;</Typography>
            <Badge pill variant="warning">${value}.00</Badge>
          </Grid>
        )
      }
    },
    {
      name: "remaining", label: "Remaining", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <Grid container justify="center" style={{minWidth: 140}}>
            <Badge pill variant="primary">{value}min</Badge>
            <Typography>&nbsp;/&nbsp;</Typography>
            <Badge pill variant="warning">${value}.00</Badge>
            &nbsp;
            <IconButton size="small" color="inherit" style={{ marginRight: 3 }} onClick={() => setAddOpen(true)}><i
              className="fa fa-plus-circle"/></IconButton>
          </Grid>
        )
      }
    },
    { name: "created_date", label: "Created Date" },
    { name: "updated_date", label: "Updated Date" },
    { name: "created_by", label: "Created By" },
    { name: "updated_by", label: "Updated By" },
    {
      name: "id", label: "Action", options: {
        filter: false, sort: false,
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <Grid container justify="center">
            <IconButton
              aria-controls="more-options"
              aria-haspopup="true"
              size="small"
              color={"primary"}
              onClick={handleClick}
            >
              <MoreVert/>
            </IconButton>
            <Menu
              id="more-options"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Call Log</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Change</MenuItem>
              <MenuItem onClick={handleClose}>Disconnect</MenuItem>
              <MenuItem onClick={() => handleClose("a")}>Add Minutes</MenuItem>
            </Menu>
          </Grid>;
        }
      }
    }
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scrollMaxHeight"
  };

  const data = [
    {
      id: 1,
      service_type: "US or International Type",
      number: "8884233345",
      destination_number: "18884233345",
      status: "success",
      description: "test number",
      billing_ended: "2020/04/20",
      spent: 3,
      remaining: 100,
      created_date: "2020/04/10",
      updated_date: "2020/04/20",
      created_by: "Admin",
      updated_by: "Admin"
    },
    {
      id: 2,
      service_type: "US or International Type",
      number: "8884233453",
      destination_number: "18884233453",
      status: "warning",
      description: "second number",
      billing_ended: "2020/04/26",
      spent: 7,
      remaining: 80,
      created_date: "2020/04/16",
      updated_date: "2020/04/28",
      created_by: "Customer",
      updated_by: "Customer"
    }
  ];

  return (
    <>
      <Grid container justify="flex-end">
        <HeaderButton onClick={() => setLocalOpen(true)} label="Setup New Local Number" color="secondary" icon="fa fa-plus"/>
        <HeaderButton onClick={() => setTollOpen(true)} label="Setup New TollFree Number" color="secondary" icon="fa fa-plus"/>
        <HeaderButton onClick={() => setOpen(true)} label="Call Log" color="primary" icon="fa fa-phone"/>
      </Grid>
      <MUIDataTable
        title={<Typography variant="h5" component="h5">Telephone Number Management</Typography>}
        columns={columns}
        options={options}
        data={data}
      />
      <CallLogModal open={open} onClose={() => setOpen(false)}/>
      <LocalNumModal open={localOpen} onClose={() => setLocalOpen(false)}/>
      <TollfreeNumModal open={tollOpen} onClose={() => setTollOpen(false)}/>
      <AddMinutesModal open={addOpen} onClose={() => setAddOpen(false)}/>
    </>
  );
}