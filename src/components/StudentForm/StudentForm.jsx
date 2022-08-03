import { useState } from 'react';

/*
YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
*/

function StudentForm(props) {
    
    const [student, setStudent] = useState({ githubName: '' });

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addStudent(student);
        clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    const clearStudentFields = () => {
        setStudent({ githubName: '' });
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent({githubName: event.target.value})} 
                    placeholder="GitHub username" 
                    value={student.githubName}
                    />
            <input type="submit" value="Add Student" />
        </form>
    );
    
}


export default StudentForm;
