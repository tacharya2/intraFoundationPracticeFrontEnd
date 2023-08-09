import React, {useState} from 'react';
import axios from 'axios';

function Form(){

const [firstName, setFirstName] = useState('');
const [middleInitial,  setMiddleInitial] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

//Address fields
  const[street, setStreet] = useState('');
  const[city, setCity] = useState('');
  const[state, setState] = useState('');
  const[zip, setZip] = useState('');


  // Function to reset address fields
  const resetAddressFields = () => {
    setStreet('');
    setCity('');
    setState('');
    setZip('');
  };
    const handleFirstNameChange = (e) => {
    setFirstName(e.target.value.trim());
    };

    const handleMiddleInitial = (e) => {
    setMiddleInitial(e.target.value.trim());
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value.trim());
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value.trim());
      };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value.trim());
      };

      const handleStreetChange = (e) => {
        setStreet(e.target.value.trim());
      };

      const handleCityChange = (e) => {
        setCity(e.target.value.trim());
      };


      const handleStateChange = (e) => {
        setState(e.target.value.trim());
      };

      const handleZipChange = (e) => {
      setZip(e.target.value.trim());
      };

const handleSubmit = (e) => {
    e.preventDefault();

    //prepare the data to be sent to the server.
    const dataToSend    = {
    firstName: firstName,
    middleInitial: middleInitial,
    lastName: lastName,
    email:  email,
    phone: phone,
    address: {
        street: street,
        city: city,
        state: state,
        zip: zip
        }
    };

    console.log(dataToSend);
    axios.post('http://localhost:8085/api/messages', dataToSend)
       .then((response) => {
        console.log(response.data);
        setFirstName('');
        setMiddleInitial('');
        setLastName('');
        setEmail('');
        setPhone('');
        resetAddressFields();
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
                <label> First Name </label>
                <input type="Text" value={firstName} onChange={handleFirstNameChange}/>
            </div>
             <div>
                <label> Middle Initial</label>
                <input type="Text" value={middleInitial} onChange={handleMiddleInitial}/>
            </div>
            <div>
                <label> Last Name </label>
                <input type="Text" value={lastName} onChange={handleLastNameChange}/>
            </div>
            <div>
                <label> Email </label>
                <input type="Text" value={email} onChange={handleEmailChange}/>
            </div>
            <div>
                <label> Phone Number </label>
                <input type="Text" value={phone} onChange={handlePhoneChange}/>
            </div>
            <div>
              <label>Street</label>
              <input type="text" value={street} onChange={handleStreetChange} />
            </div>
            <div>
              <label>City</label>
              <input type="text" value={city} onChange={handleCityChange} />
            </div>
            <div>
              <label>State</label>
              <input type="text" value={state} onChange={handleStateChange} />
            </div>
            <div>
              <label>Zip</label>
              <input type="text" value={zip} onChange={handleZipChange} />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
);
}

export default Form;