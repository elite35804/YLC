import React from "react";
import MUIDataTable from "mui-datatables";
import {Typography} from "@material-ui/core";
import {Badge} from "react-bootstrap";
import {CellCenterHeader} from "../utils";
import {options} from "../utils/tableUtils";

export default function ActivityLog() {
  const columns = [
    {
      name: "activity_type", label: "Activity Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "service_type", label: "Service Type", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "status", label: "Status", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div className="text-center" style={{minWidth: 70}}>
            <Badge pill variant={value === "Success" ? "success" : "danger"}
                   style={{fontWeight: 'bold', color: 'white'}}>
              {value}
            </Badge></div>
        )
      }
    },
    {name: "number", label: "Number"},
    {name: "destination_number", label: "Destination Number"},
    {name: "price", label: "Price"},
    {name: "created_at", label: "Created At"},
    {name: "description", label: "Description"},
  ];

  const data = [
    {
      activity_type: "Activate",
      service_type: "US or International Number",
      status: "Success",
      number: "8772345343",
      destination_number: "18772345645",
      price: "$4.00",
      created_at: "2020/04/20 05:23 AM",
      description: "Success Local Number Activated"
    },
    {
      activity_type: "Cancel",
      service_type: "US or International Number",
      status: "Failed",
      number: "8772345343",
      destination_number: "18772345645",
      price: "$4.00",
      created_at: "2020/04/20 07:54 PM",
      description: "Failed Cancel Number"
    },
  ];

  return (
    <>
      <MUIDataTable
        title={<Typography variant="h5" component="h5">Activity Log</Typography>}
        columns={columns}
        options={options}
        data={data}
      />
    </>
  );
}
