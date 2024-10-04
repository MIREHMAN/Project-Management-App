import './App.css';
import React, { useState } from 'react'
import DataDisplay from './pages/DataDisplay';
import DataForm from './pages/DataForm';


function App() {
  const[data,setData]=useState([])
  const [editItem,seteditItem]=useState(null);
  
  const edithandler =(item,index)=>{
    seteditItem({ item, index });
  }
  const deletehandler =(index)=>{
    setData((data.filter((item, i) => i !== index)))
  }
  return (
    <div className="App">
      <DataForm setData={setData} editItem={editItem} seteditItem={seteditItem}/>
      <DataDisplay data={data} edithandler={edithandler} deletehandler={deletehandler}/>
      
    </div>
  );
}

export default App;
