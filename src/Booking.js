import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [groupSize, setGroupSize] = useState(2);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tablebooking-backend.vercel.app/api/book', { groupSize, name });
      alert(`Booking successful: ${response.data.message}`);
    } catch (error) {
      console.error('Error booking table', error);
      alert('we are aunable to accept this booking right now ');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>mention your group size between 1 to 12</h2>
      <div>
        <label>Group Size:</label>
        <input
          type="number"
          value={groupSize}
          onChange={(e) => setGroupSize(Number(e.target.value))}
          min="1"
        />
      </div>
      <h2>plese mention the name </h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
};

export default Booking;
