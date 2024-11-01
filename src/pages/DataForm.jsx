import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  TextField 
} from '@mui/material';

function DataForm({ setData, editItem, setEditItem, onClose }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  

  useEffect(() => {
    if (editItem) {
      setName(editItem.item.name);
      setEmail(editItem.item.email);
      setContact(editItem.item.contact);
    }
  }, [editItem]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, email, contact };
    setName('');
    setEmail('');
    setContact('');

    if (editItem) {
      setData((prevData) =>
        prevData.map((item, i) => (i === editItem.index ? newData : item))
      );
      setEditItem(null);
    } else {
      setData((prevData) => [...prevData, newData]);
    }
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your details below.
          </DialogContentText>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!name || !email || !contact}>
            {editItem ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DataForm;