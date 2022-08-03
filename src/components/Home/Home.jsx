import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';

function Home() {

    const dispatch = useDispatch();

    let [currentStudent, setCurrentStudent] = useState({});

    //On Load, call server
    useEffect(() => {
        console.log('in useEffect')
        dispatch({type: 'FETCH_STUDENTS'});
    }, [])


    // This function is called by the StudentForm when the submit button is pressed
    const addStudent = (newStudent) => {
        dispatch({type: 'ADD_STUDENT', payload: {github_name: newStudent.githubName}})
    }

    // get students from DB


    return (
        <div className="App">
            <h2>Add a Student</h2>
            <StudentForm addStudent={addStudent} currentStudent={currentStudent} />

            <h2>Student list:</h2>
            <StudentList />
        </div>
    );

}

export default Home;
