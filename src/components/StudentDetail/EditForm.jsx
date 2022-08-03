import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditForm(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const editStudent = useSelector((store) => store.editStudent);

  function handleChange(event) {
    dispatch({ 
                type: 'EDIT_ONCHANGE', 
                payload: { property: 'github_name', value: event.target.value }
            });

  }

  // Called when the submit button is pressed
  function handleSubmit(event) {
    event.preventDefault();

    // PUT REQUEST to /students/:id
    axios.put(`/students/${editStudent.id}`, editStudent)
        .then( response => {
            // clean up reducer data            
            dispatch({ type: 'EDIT_CLEAR' });

            // refresh will happen with useEffect on Home
            history.push('/'); // back to list
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event)}
          placeholder='GitHub username'
          value={editStudent.github_name}
        />
        <input type='submit' value='Update Student' />
      </form>
    </>
  );
}

export default EditForm;
