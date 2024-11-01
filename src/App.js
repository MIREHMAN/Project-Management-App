import React, { useEffect, useState } from 'react';
import { Container} from '@mui/material';
import Grid from '@mui/material/Grid2';
import DataDisplay from './pages/DataDisplay';
import DataForm from './pages/DataForm';
import ResponsiveDrawer from './components/ResponsiveDrawer';

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
    <Container maxWidth="xl">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={2} lg={2}>
        <ResponsiveDrawer />
      </Grid>
      <Grid item xs={12} sm={9} md={10} lg={10}>
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
      </Grid>
    </Grid>
  </Container>
  );
}

export default App;