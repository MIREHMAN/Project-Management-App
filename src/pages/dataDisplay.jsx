import React from 'react'

function DataDisplay ({data, edithandler, deletehandler, openFormHandle}){
    
    return(
    
        <div>
            <h2>Data Display</h2>
            <button onClick={openFormHandle}>Add Data</button>
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                <button onClick={() => edithandler(item, index)}>Edit</button>
                                <button onClick={()=> deletehandler(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
    </div>
    

)
}
export default DataDisplay;