import { useSelector} from 'react-redux';
import './StudentList.css';
import StudentDetail from '../StudentDetail/StudentDetail';


function StudentList(props) {

    const studentList = useSelector(store => store.studentList);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Github Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <StudentDetail key={student.id} student={student} />
                    })}
                </tbody>
            </table>
        </div>
    );
    
}

export default StudentList;
