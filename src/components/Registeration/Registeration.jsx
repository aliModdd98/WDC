import axios from 'axios';
import './RegisterationStyle.css'
import { useEffect, useState } from 'react';
function Registeration() {
 
  // const Students=["aa","bb","cc","dd"];
  // const Courses=["SS","ss","jkj","sks"]
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
   
    axios
      .get("url")
      .then(response => setStudents(response.data))
      .catch(error => {
        console.log(error)
      });

     axios.get("url")
      .then(response => setCourses(response.data))
      .catch(error => {
        console.log(error)
      });
  }, []);

  const handleRegister = () => {
       const data = {
      student: selectedStudent,
      course: selectedCourse
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
    <div className='registeration'>
      <h2>Register For New Course</h2>
 <div className="row">
  
 <label className='students'>
        Select a Student:
        <select  value={selectedStudent}
                 onChange={e => setSelectedStudent(e.target.value)}
                 name="selectedSt" style={{margin: "15px", width: "200px" }} >
                     {students.map((e, index) => (
              <option className="std" key={index} value={e}>
                {e}
              </option>
            ))}
 {/* { Students.map((e,index)=>
            ( <option className='std' key={index} value={e}>{e}</option>)
          )} */}
        </select>
      </label>
 
  <label className='courses'>
        Select a Course:
        <select  value={selectedCourse}
                 onChange={e => setSelectedCourse(e.target.value)}
                 name="selectedSt" 
                 style={{ margin: "15px",width: "200px" }}>
          {courses.map((e, index) => (
              <option className="std" key={index} value={e}>
                {e}
              </option>
            ))}
            {/* { Courses.map((e,index)=>
            ( <option className='std' key={index} value={e}>{e}</option>)
          )}  */}
        </select>
      </label>
 </div>
 <button className='btnR' onClick={handleRegister}>Register </button>
    </div>
    
  )
}

export default Registeration