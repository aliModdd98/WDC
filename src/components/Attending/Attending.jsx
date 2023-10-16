import { useEffect, useState } from 'react'
import axios from 'axios';
import  './AttendingStyle.css'
function Attending() {   
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectStatus, setselectStatus] = useState("");
  const Status=["Active","Absent","Late"]
 


useEffect(() => {
   
    axios
      .get("url")
      .then(response => setStudents(response.data))
      .catch(error => {
        console.log(error)
      });

    
  }, []);

  const handleSelectedStatus= (event) => {
    setselectStatus(event.target.value);
  };

  const handleSelectedCourse = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleRegisterStatus = () => {
    const data = {
   student: selectedStudent,
   course: selectedCourse,
   status:selectStatus
 };

 axios
   .post("", data)
   .then(response => {
     console.log('Registeration successfully:', response.data);
   })
   .catch(error => {
    console.log(error)
   });
};

  return (
    <div className='attending'>
      <h2>Attending Courses</h2>
 <label>Input a Course : <input type='text'   value={selectedCourse}
            placeholder='input name of Course '
            onChange={handleSelectedCourse} /></label>
<label className='students'>
        Select a Student:
        <select  value={selectedStudent}
                 onChange={e => setSelectedStudent(e.target.value)}
                 name="selectedSt" style={{margin: "15px", width: "200px" }} >
                     {students.map((e, index) => (
              <option className="std" key={index} value={e}>
                {e}
              </option>
            ))}</select></label><br/>
<label > Status  <select value={selectStatus} onChange={handleSelectedStatus}>
{ Status.map((e,index)=>
   (<option className="std" key={index} value={e}>{e}</option>))}
</select> </label>
<button className='btnR btnstatus' onClick={handleRegisterStatus}>Register </button>      
    </div>
  )
}

export default Attending