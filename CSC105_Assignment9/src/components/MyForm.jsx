import React, { useState } from 'react';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email address: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nPassword: ${password}`);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumberRegex = /^[0-9]{0,10}$/;
    const inputPhoneNumber = event.target.value;
    if (phoneNumberRegex.test(inputPhoneNumber)) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
        <h1>REGISTER</h1>
        <br/>
        
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required  placeholder='Enter email'/>
      </label>
      <br/>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstNameChange} required placeholder='Enter your first name' />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastNameChange} required placeholder='Enter your last name'/>
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} required placeholder='Enter phone number'/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required placeholder='Password'/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MyForm;