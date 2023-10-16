import React, { useState } from 'react'
import './AddingStyle.css'
import axios from 'axios'
function AddStudents() {
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [studentClass, setStudentClass] = useState('');
  
    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
  
    const handleClassChange = (event) => {
      setStudentClass(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
       const formData = {
        fullName,
        age,
        gender,
        studentClass
      };
  
      
      axios.post('http://127.0.0.1:8000/api/add_student', formData)
        .then(response => {
         
          console.log('Form submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
    };
  
    return (
        <form name='add' className='addingForm' onSubmit={handleSubmit}>
<h2>Adding New Student</h2>

        <div className='name'>
          <label htmlFor="fullName">Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            placeholder='input Full Name'
            onChange={handleFullNameChange}
          />
        </div>
        <div className='age'>
          <label htmlFor="age">Age:</label>
          <input type="number"  placeholder='input your age' id="age" value={age} onChange={handleAgeChange} />
        </div>
        <div className='gender'>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === 'Male'}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>
        <div className='class'>
          <label htmlFor="studentClass">Class:</label>
          <input
            type="text"
            id="studentClass"
            placeholder='input your Class'
            value={studentClass}
            onChange={handleClassChange}
          />
        </div>
        <button className='submit LandingBtn' type="submit">Add Student</button>
      </form>
  )
}

export default AddStudents