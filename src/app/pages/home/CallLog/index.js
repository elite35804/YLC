import React from "react";
import MUIDataTable from "mui-datatables";
import {IconButton, Typography} from "@material-ui/core";
import {Badge} from "react-bootstrap";
import {CellCenterHeader} from "../utils";
import {options} from "../utils/tableUtils";

export default function CallLog() {
  const columns = [
    {
      name: "start_time", label: "Start-Time(UTC)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "stop_time", label: "Stop-Time(UTC)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "dtmf_time", label: "DTMF-TIme(UTC)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "start_time_local", label: "Start-Time(Local)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "stop_time_local", label: "Stop-Time(Local)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {
      name: "dtmf_time_local", label: "DTMF-Time(Local)", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => <div className="text-center">{value}</div>
      }
    },
    {name: "duration", label: "Duration"},
    {name: "clg_nbr", label: "CLG-NBR"},
    {name: "cld_nbr", label: "CLD-NBR"},
    {name: "sip", label: "SIP Code"},
    {name: "rate_deck", label: "Rate Deck", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div className="text-center" style={{minWidth: 70}}>
            <Badge pill variant="secondary" style={{fontWeight: 'bold', color: 'white'}}>{value}</Badge>
          </div>
        )
      }},
    {name: "call_id", label: "Call ID"},
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
    {name: "id", label: "Action", options: {
        customHeadRender: (props) => <CellCenterHeader value={props.label}/>,
        customBodyRender: (value) => (
          <div className="text-center" style={{minWidth: 70}}>
            <IconButton
              aria-controls="more-options"
              aria-haspopup="true"
              size="small"
              color="primary"
              onClick={() => {}}
            >
              <i className="fa fa-search"/>
            </IconButton>
          </div>
        )
      }},
  ];

  const data = [
    {
      start_time: "2020/03/30 15:50:00",
      stop_time: "2020/04/20 15:50:00",
      dtmf_time: "2020/03/30 15:50:00",
      start_time_local: "2020/03/30 15:50:00",
      stop_time_local: "2020/04/20 15:50:00",
      dtmf_time_local: "2020/03/30 15:50:00",
      duration: "100",
      clg_nbr: "7278001011",
      cld_nbr: "17278001011",
      sip: "NSR2345T",
      rate_deck: "N / C",
      call_id: "354315-464",
      status: "Failed",
    }
  ];

  return (
    <>
      <MUIDataTable
        title={<Typography variant="h5" component="h5">Call Log</Typography>}
        columns={columns}
        options={options}
        data={data}
      />
    </>
  );
}
