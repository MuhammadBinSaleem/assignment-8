import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/submit-form', formData)
      .then((response) => {
        console.log('Response from server:', response.data);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        alert('Error submitting form!');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>Message:
        <textarea name="message" value={formData.message} onChange={handleChange} rows="5"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
