import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditClick = ()=>{
    //dispatch student infor to the redux store
    dispatch ({ type: 'SET_EDIT_STUDENT', payload: props.student });
    // route user to the edit form
    history.push('/edit');
  }

  return (
    <tr>
      <td>{props.student.github_name}</td>
      <td>
        <button
        onClick={handleEditClick}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default StudentDetail;
