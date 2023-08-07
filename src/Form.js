import React, {useState} from 'react';
import axios from 'axios';

function Form(){

const [textMessage, setTextMessage] = useState('');
const [name, setName] = useState('');
const maxCharacters = 200;

const handleTextMessageChange = (event) => {
    setTextMessage(event.target.value.trim());
};
    const handleNameChange = (e) => {
    setName(e.target.value);
    };
const handleSubmit = (event) => {
    event.preventDefault();


    //prepare the data to be sent to the server.

    const dataToSend    = {
    textMessage: textMessage,
    name: name
    };

    console.log(dataToSend);
    axios.post('http://localhost:8085/api/messages', dataToSend)
       .then((response) => {
        console.log(response.data);
        setTextMessage('');
        setName('');
        })
       .catch(error => {
        console.log('Error: ', error);
    });
};
return(
    <div>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label> Name </label>
            <input type="Text" value={name} onChange={handleNameChange}/>
            </div>
            <div>
            <label> Message </label>
            <textarea rows="10" cols="50" value={textMessage} onChange={handleTextMessageChange}/>
            <p>{textMessage.length}/{maxCharacters}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
      <p>Your Message: {textMessage}</p>
    </div>
);
}
export default Form;