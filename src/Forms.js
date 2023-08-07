import React, { useState } from 'react';
import axios from 'axios';

function Forms() {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to be sent to the server
    const dataToSend = {
      textMessage: value,
    };

    // Make a POST request to the backend API
    axios.post('http://localhost:8085/api/messages', dataToSend)
      .then((response) => {
        console.log(response.data);
        setOutput(`you wrote: "${value}"`);
        setValue('');
        // Optionally, you can display a success message to the user
        alert('Message submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Optionally, you can display an error message to the user
        alert('An error occurred while submitting the message.');
      });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={handleChange}
        ></textarea>
        <div>
          <input type="submit" value="Show output" />
        </div>
      </form>
      <div>{output}</div>
    </React.Fragment>
  );
}
export default Forms;
