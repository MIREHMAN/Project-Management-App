import React, { useState } from 'react';
import { Box } from '@mui/material';
import DataDisplay from './pages/DataDisplay';
import DataForm from './pages/DataForm';

function App() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const openFormHandle = () => setOpenForm(true);
  const closeFormHandle = () => {
    setOpenForm(false);
    setEditItem(null);
  };

  const editHandler = (item, index) => {
    setEditItem({ item, index });
    openFormHandle();
  };

  const deleteHandler = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', padding: 2 }}>
      <DataForm
        data={data}
        setData={setData}
        editItem={editItem}
        setEditItem={setEditItem}
        open={openForm}
        onClose={closeFormHandle}
      />
      <DataDisplay
        data={data}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        openFormHandle={openFormHandle}
      />
    </Box>
  );
}

export default App;