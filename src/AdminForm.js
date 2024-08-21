import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [size, setSize] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [canCombine, setCanCombine] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tables = Array.from({ length: quantity }, (_, index) => ({
        size,
        isAvailable: true,
        canCombine,
        position: index + 1, // Or any other logic for determining position
      }));

      await axios.post('https://tablebooking-backend.vercel.app/api/tables', { tables });
      alert('Tables created successfully');
    } catch (error) {
      console.error('Error creating tables', error);
      alert('Error creating tables');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2> for creating the table you have to select the size of table and no of table u want to create or if u want   and it can be combine or note</h2>
      <div>
        <label>Table Size:</label>
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value={2}>2-person</option>
          <option value={4}>4-person</option>
          <option value={6}>6-person</option>
        </select>
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
      </div>

      <div>
        <label>
          Can Combine:
          <input
            type="checkbox"
            checked={canCombine}
            onChange={(e) => setCanCombine(e.target.checked)}
          />
        </label>
      </div>

      <button type="submit">Create Tables</button>
    </form>
  );
};

export default AdminForm;
