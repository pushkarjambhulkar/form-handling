import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const getValue = (event) => {
    const oldData = { ...formData };
    const inputName = event.target.name;
    const inputValue = event.target.value;
    oldData[inputName] = inputValue;

    setFormData(oldData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentUserFormData = {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };
    const oldUserData = [...userData, currentUserFormData];
    setUserData(oldUserData);
    console.log("Saved Data:", oldUserData); // Log saved data to console

    setFormData({
      username: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-5">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="total-entries mb-3">
              <p>Total saved entries: {userData.length}</p> {/* Display total saved entries */}
            </div>
            <h2 className="mb-4">Get in Touch</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                value={formData.username}
                name="username"
                onChange={getValue}
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                value={formData.email}
                id="email"
                name="email"
                onChange={getValue}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={getValue}
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={getValue}
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {formData.index !== "" ? 'Update' : 'Save'}
            </button>
          </form>

          <div className="mt-5">
            <h3 className="text-primary">Saved Entries</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
