import React, { useState } from 'react'

function DataForm({setData, editItem, seteditItem, onClose}) {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[contact,setContact]=useState('');
    
    if (editItem) {
        setName(editItem.item.name);
        setEmail(editItem.item.email);
        setContact(editItem.item.contact);
      }
    
    function handleSubmit(e){
        e.preventDefault();
        const newData={
            name: name,
            email: email,
            contact: contact
        };
        setName('');
        setEmail('');
        setContact('');
        
        if(editItem) {
            setData((prevData) =>
                prevData.map((item, i) =>
                  i === editItem.index ? newData : item
                )
              );
              seteditItem(null);
        }
        else
        setData( (prevData) => [...prevData, newData]);
    }
    
  return (
    <div>
        <div>
            <h1>Add Data</h1>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label>Email</label>
                <input type="email"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <label>Contact</label>
                <input type='number'value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                <button type='submit' onClick={handleSubmit} disabled={!name || !email || !contact}>{editItem ? 'Update Data' : 'Add Data'}</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
        
            
</div>
                )
            }
            

export default DataForm