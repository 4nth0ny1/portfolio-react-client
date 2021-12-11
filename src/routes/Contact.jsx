import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <main className="contact-page">
      <h2>Contact</h2>
      <div className="contact-form">
        <TextField
            className="name-email"
            id="outlined"
            label="Name"
            defaultValue="Name"
          />
        <TextField
            className="name-email"
            id="outlined"
            label="Email"
            defaultValue="Email"
          />
          <TextField
              className="message-field"
              id="outlined-multiline-flexible"
              defaultValue="Write your message here..."
              multiline
              maxRows={14}
              // value={value}
              // onChange={handleChange}
            />
      </div>
    </main>
  );
}