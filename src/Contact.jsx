import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    seriesName: '',
    genre: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Numele este obligatoriu.';
    if (!formData.email.trim()) {
      formErrors.email = 'Emailul este obligatoriu.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Emailul nu este valid.';
    }
    if (!formData.message.trim()) formErrors.message = 'Mesajul este obligatoriu.';
    if (!formData.seriesName.trim()) formErrors.seriesName = 'Numele serialului este obligatoriu.';
    if (!formData.genre.trim()) formErrors.genre = 'Genul este obligatoriu.';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
    
      await axios.post('http://localhost:5000/submit', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '', seriesName: '', genre: '' }); 
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('A apărut o eroare la trimiterea formularului.');
    }
  };
  

  return (
    <div>
      <h1 className="contact-title">Contact</h1>
      {success && <p style={{ color: 'green' }}>Formularul a fost trimis cu succes!</p>}
      <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <label htmlFor="seriesName">Numele Serialului:</label>
        <input
          type="text"
          id="seriesName"
          name="seriesName"
          value={formData.seriesName}
          onChange={handleChange}
          required
        />
        {errors.seriesName && <p style={{ color: 'red' }}>{errors.seriesName}</p>}

        <label htmlFor="genre">Gen:</label>
        <select id="genre" name="genre" value={formData.genre} onChange={handleChange} required>
          <option value="">Selectează genul</option>
          <option value="drama">Dramă</option>
          <option value="comedy">Comedie</option>
          <option value="fantasy">Fantezie</option>
          <option value="action">Acțiune</option>
          <option value="thriller">Thriller</option>
        </select>
        {errors.genre && <p style={{ color: 'red' }}>{errors.genre}</p>}

        <label htmlFor="message">Mesaj:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <button type="submit">Trimite</button>
      </form>
      </div>

    </div>
  );
}

export default Contact;
