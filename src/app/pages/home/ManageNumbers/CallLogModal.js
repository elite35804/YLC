import React from 'react';
import { Table, TableCell, TableHead, TableBody, TableRow, Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const CallLogModal = ({open, onClose}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Call Log</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">Total Duration</TableCell>
            <TableCell align="center">Total Change</TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">888-534-7456</TableCell>
              <TableCell align="center">15min</TableCell>
              <TableCell align="center">$5.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
};

export default CallLogModal;