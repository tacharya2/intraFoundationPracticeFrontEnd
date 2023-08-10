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

  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [message, setMessage] = useState('');
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
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
        const handleRePasswordChange = (e) => {
          setRePassword(e.target.value);
        };

const handleSubmit = (e) => {
    e.preventDefault();
if(password !== rePassword){
    alert('Passwords do not match');
}
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
        },
    password: password,
    rePassword: rePassword
    };

    console.log(dataToSend);
    axios.post('http://localhost:8085/api/messages/create', dataToSend)
       .then((response) => {
        console.log(response.data);
        setMessage(`Hello ${response.data.firstName} ${response.data.lastName}! Thank you for registering with us. Your username is ${response.data.email}`);
        setFirstName('');
        setMiddleInitial('');
        setLastName('');
        setEmail('');
        setPhone('');
        resetAddressFields();
        setPassword('');
        setRePassword('');
        })
       .catch(error => {
        console.log('Error: ', error);
    });
};
return(
    <div className="container">
     <div className="form-wrapper">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
             <div className="form-element">
                <label> First Name </label>
                <input required type="Text" placeholder="John" value={firstName} onChange={handleFirstNameChange} />
            </div>
             <div className="form-element">
                <label> Middle Initial</label>
                <input type="Text" placeholder="B" value={middleInitial} onChange={handleMiddleInitial}/>
            </div>
            <div className="form-element">
                <label> Last Name </label>
                <input required type="Text" placeholder="Doe" value={lastName} onChange={handleLastNameChange}/>
            </div>
            <div className="form-element">
                <label> Email </label>
                <input required type="email" placeholder="username" value={email} onChange={handleEmailChange}/>
            </div>
            <div className="form-element">
                <label> Phone Number </label>
                <input required type="Text" placeholder="123-456-7890" value={phone} onChange={handlePhoneChange}/>
            </div>
            <div className="form-element">
              <label>Street</label>
              <input required type="text" placeholder="123 Main Street" value={street} onChange={handleStreetChange} />
            </div>
            <div className="form-element">
              <label>City</label>
              <input required type="text" placeholder="San Antoine" value={city} onChange={handleCityChange} />
            </div>
            <div className="form-element">
              <label>State</label>
              <input required type="text" placeholder="TX" value={state} onChange={handleStateChange} />
            </div>
            <div className="form-element">
              <label>Zip</label>
              <input required type="text" placeholder="30084" value={zip} onChange={handleZipChange} />
            </div>
            <div className="form-element">
              <label>Password</label>
              <input required type="password" placeholder="8 characters long" value={password} onChange={handlePasswordChange}/>
            </div>
            <div className="form-element">
              <label>Re-enter Password</label>
              <input required type="password" placeholder="must match with above" value={rePassword} onChange={handleRePasswordChange}/>
            </div>

            <button type="submit" className="submit-button" >Register with Intra Foundation </button>
            <p className="message">{message}</p>
            <p className="log-in">Please <a href="/login">Login</a> to access you account</p>
        </form>
        </div>
    </div>
);
}

export default Form;