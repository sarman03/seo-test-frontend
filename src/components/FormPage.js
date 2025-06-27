import React, { useState } from 'react';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    age: '',
    price: '',
    history: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert age and price to numbers before sending
    const payload = {
      ...formData,
      age: Number(formData.age),
      price: Number(formData.price)
    };

    try {
      const response = await fetch('https://seo-test-backend.onrender.com/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({ name: '', company: '', age: '', price: '', history: '' });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} />
        <textarea name="history" placeholder="History" value={formData.history} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;