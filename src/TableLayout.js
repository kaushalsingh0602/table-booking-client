import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableLayout = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      const response = await axios.get('https://tablebooking-backend.vercel.app/api/tables');
      setTables(response.data);
    };
    fetchTables();
  }, []);

  return (
    <div>
      <h2>Restaurant Layout</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tables.map((table) => (
          <div
            key={table._id}
            style={{
              width: '100px',
              height: '150px',
              border: '1px solid black',
              margin: '10px',
              backgroundColor: table.isAvailable ? 'green' : 'red',
            }}
          >
            <p>Size: {table.size}</p>
            <p>Position: {table.position}</p>
            <p>bookedBy: {table.bookedBy}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLayout;
