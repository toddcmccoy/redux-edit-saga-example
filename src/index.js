import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import axios from 'axios';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();


// all the students from the DB
const studentList = (state = [], action) => {
    if(action.type === 'SET_STUDENT_LIST') {
        return action.payload;
    }

    return state;
}

// hold only the single student object being edited
//  payload: { property: 'github_name', value: event.target.value }
const editStudent = (state  = {}, action) => {
    if (action.type === 'SET_EDIT_STUDENT'){
        // action.payload is the object from the database
        return action.payload
    }
    else if (action.type === 'EDIT_ONCHANGE'){
        return{
            // spread - give me all of the object
            ...state,
            // then change this one in particular
            [action.payload.property]: action.payload.value
            // ^-Property               ^-Value
        }
    } else if(action.type ==='EDIT_CLEAR'){
        return { github_name: ''};
    }
    return state;
}

function* fetchStudents() {
    try {
        const response = yield axios.get('/students')
        yield put({ type: 'SET_STUDENT_LIST', payload: response.data })
    } catch (err) {
        console.log(err)
    }
}

function* addStudent(action) {
    try {
        yield axios.post('/students', action.payload)
        yield put({ type: 'FETCH_STUDENTS' })
    } catch (err) {
        console.log(err)
    }
}





function* rootSaga() {
    yield takeEvery('FETCH_STUDENTS', fetchStudents);
    yield takeEvery('ADD_STUDENT', addStudent);
}




// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        studentList,
        editStudent
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

