import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Dialog, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Typography 
} from '@mui/material';
import DataForm from './DataForm';

function DataDisplay({ data, setData, editItem, setEditItem }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  const editHandler = (item, index) => {
    setEditItem({ item, index });
    handleOpen();
  };

  const deleteHandler = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ width: '800px', margin: 'auto', padding: 2 }}>
      <Typography variant="h5">Data Display</Typography>
      <Button variant="contained" onClick={handleOpen}>
        Add Data
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.contact}</TableCell>
              <TableCell>
                <Button onClick={() => editHandler(item, index)}>Edit</Button>
                <Button onClick={() => deleteHandler(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose}>
        <DataForm 
          setData={setData} 
          editItem={editItem} 
          setEditItem={setEditItem} 
          onClose={handleClose} 
        />
      </Dialog>
    </Box>
  );
}

export default DataDisplay;