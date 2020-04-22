import React, {useState} from "react";
import MUIDataTable from "mui-datatables";
import {Typography, Paper, Tabs, Tab, Grid} from "@material-ui/core";
import {Badge} from "react-bootstrap";
import {CellCenterHeader} from "../utils";
import {options} from "../utils/tableUtils";
import {HeaderButton} from "../ManageNumbers/Components";

export default function Invoices() {

  const [key, setKey] = useState(0);
  const customerColumns = [
    {
      name: "date", label: "Invoice Date", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "type", label: "Invoice Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "amount", label: "Invoice Amount", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center" style={{minWidth: 70}}>
          <Badge pill variant="success" style={{fontWeight: 'bold', color: 'white'}}>{value}</Badge>
        </div>
      }
    },
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

  const inmateColumns = [
    {
      name: "date", label: "Invoice Date", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "type", label: "Invoice Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "amount", label: "Invoice Amount", options: {
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
      inmate_balance: "$30.50",
      transaction_id: "MONTHIVC15534574356567435",
      name_on_card: "rjkeele",
      last_4digit: "4073",
      description: "Initial Setup Fee for Number 17274562345 From Credit Card"
    }
  ];

  return (
    <Paper style={{padding: 10}}>
      <Tabs
        value={key}
        onChange={(key, newValue) => setKey(newValue)}
        indicatorColor="primary" textColor="primary"
      >
        <Tab label="Customer"/>
        <Tab label="Inmate"/>
      </Tabs>
      <Grid container justify="flex-end">
        <HeaderButton onClick={() => {}} label="View" color="primary" icon="fa fa-search"/>
      </Grid>
      {key === 0 && <MUIDataTable
        title={<Typography variant="h5" component="h5">Customer Invoices</Typography>}
        columns={customerColumns}
        options={options}
        data={data}
      />}
      {key === 1 && <MUIDataTable
        title={<Typography variant="h5" component="h5">Inmate Invoices</Typography>}
        columns={inmateColumns}
        options={options}
        data={data}
      />}
    </Paper>
  );
}
