import './App.css';
import React, { useState } from 'react'
import DataDisplay from './pages/DataDisplay';
import DataForm from './pages/DataForm';


function App() {
  const[data,setData]=useState([])
  const [editItem,seteditItem]=useState(null);
  const[isFormOpen,setIsFormOpen]=useState(false);

  const openFormHandle = () => {
    setIsFormOpen(true);
  };

  const closeFormHandle = () => {
    setIsFormOpen(false);
  };
  
  const edithandler =(item,index)=>{
    seteditItem({ item, index });
  }
  const deletehandler =(index)=>{
    setData((data.filter((item, i) => i !== index)))
  }
  return (
    <div className="App">
      {isFormOpen && (
        <DataForm
          setData={setData}
          editItem={editItem}
          seteditItem={seteditItem}
          onClose={closeFormHandle}
        />
      )}
      <DataDisplay data={data} edithandler={edithandler} deletehandler={deletehandler}  openFormHandle={openFormHandle}/>
      
    </div>
  );
}

export default App;
