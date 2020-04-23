import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import {Typography, Paper, Tabs, Tab, Grid} from "@material-ui/core";
import {Badge} from "react-bootstrap";
import {CellCenterHeader} from "../utils";
import {options} from "../utils/tableUtils";
import {HeaderButton} from "../ManageNumbers/Components";
import AddFunds from "./AddFunds";

export default function Payments() {

  const [key, setKey] = useState(0);
  const [open, setOpen] = useState(false);
  const customerColumns = [
    {
      name: "date", label: "Payment Date", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "type", label: "Payment Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "amount", label: "Payment Amount", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center" style={{minWidth: 70}}>
          <Badge pill variant="success" style={{fontWeight: 'bold', color: 'white'}}>{value}</Badge>
        </div>
      }
    },
    {
      name: "status", label: "Status", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center" style={{minWidth: 70}}>
          <Badge pill variant="primary" style={{fontWeight: 'bold', color: 'white'}}>{value}</Badge>
        </div>
      }
    }, {name: "transaction_id", label: "Transaction Id"},
    {name: "name_on_card", label: "Name On Card"},
    {name: "last_4digit", label: "Last 4 Digits On Card"},
    {
      name: "description", label: "Description", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
  ];

  const inmateColumns = [
    {
      name: "date", label: "Payment Date", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "type", label: "Payment Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "amount", label: "Payment Amount", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div className="text-center" style={{minWidth: 70}}>
            <Badge pill variant="success"
                   style={{fontWeight: 'bold', color: 'white'}}>
              {value}
            </Badge></div>
        )
      }
    },
    {
      name: "status", label: "Status", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div className="text-center" style={{minWidth: 70}}>
            <Badge pill variant="primary" style={{fontWeight: 'bold', color: 'white'}}>{value}</Badge>
          </div>
        )
      }
    },
    {name: "inmate_name", label: "Inmate Name"},
    {name: "inmate_balance", label: "Inmate Balance"},
    {name: "transaction_id", label: "Transaction Id"},
    {name: "name_on_card", label: "Name On Card"},
    {name: "last_4digit", label: "Last 4 Digits On Card"},
    {
      name: "description", label: "Description", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
  ];

  const data = [
    {
      date: "2020/04/20 00:50:45 AM",
      type: "Monthly Fee",
      amount: "$5.00",
      inmate_name: "Test",
      status: "REFUNDED",
      inmate_balance: "$30.50",
      transaction_id: "MONTHIVC15534574356567435",
      name_on_card: "rjkeele",
      last_4digit: "4073",
      description: "Initial Setup Fee for Number 17274562345 From Credit Card"
    }
  ];

  const handleClose = () => setOpen(false);

  return (
    <Paper style={{padding: 15}}>
      <Tabs
        value={key}
        onChange={(key, newValue) => setKey(newValue)}
        indicatorColor="primary" textColor="primary"
      >
        <Tab label="Customer"/>
        <Tab label="Inmate"/>
      </Tabs>
      <Grid container justify="flex-end">
        {key === 0 && <HeaderButton onClick={() => {setOpen(true)}} label="Add Funds" color="secondary" icon="fa fa-plus"/>}
        {key === 1 && <HeaderButton onClick={() => {}} label="Quick Pay" color="secondary" icon="fa fa-id-card"/>}
        <HeaderButton onClick={() => {}} label="View" color="primary" icon="fa fa-search"/>
      </Grid>
      {key === 0 && <MUIDataTable
        title={<Typography variant="h5" component="h5">Customer Payments</Typography>}
        columns={customerColumns}
        options={options}
        data={data}
      />}
      {key === 1 && <MUIDataTable
        title={<Typography variant="h5" component="h5">Inmate Payments</Typography>}
        columns={inmateColumns}
        options={options}
        data={data}
      />}
      <AddFunds open={open} onClose={handleClose}/>
    </Paper>
  );
}
