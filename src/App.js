import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [toDo, setToDo] = useState([
    {"id": 1, "title": "Task 1", "status": false},
    {"id": 2 , "title": "Task 2", "status": false}
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {

  };

  const deleteTask = (id) => {

  };

  const markDone = (id) => {

  }; 

  const cancelUpdate = () => {

  };

  const changeTask = (e) => {

  };

  const updateTask = () => {

  };

    // The counter

  const [count, setCount] = useState(() => {

    return 4
  });

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }


  return (
    <div className='container'>
      <div className='todoWrapper'>
        <h2>
          Todo List App
        </h2>

        {/* Update Task Form */}

        {/* Add Task Form */}

        <div className='formContainer'>
          <div className='inputWrapper'>
            <input/>
          </div>

          <div className='buttonWrapper'>
            <button className='success'>
              Add Task
            </button>
          </div>
        </div>

        {/* Display Tasks */}

        <div className='listContainer'>
          {toDo && toDo.length ? '' : 'No tasks...'}
          {toDo && toDo 
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
              return(
                <React.Fragment key={task.id}>
                  <div className='tasksWrapper'>
                    <div className={task.status ? 'done' : ''}>
                      <span className='taskNumber'>{index + 1}</span>
                      <span className='taskText'>{task.title}</span>
                    </div>

                    <div className='iconsWrapper'>
                      <span title='Completed / Not completed'>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                      </span>
                      
                      <span title='Edit'>
                        <FontAwesomeIcon icon={faPen}/>
                      </span>

                      <span title='Delete'>
                        <FontAwesomeIcon icon={faTrashCan}/>
                      </span>
                    </div>

                  </div>
                </React.Fragment>  
              )
            })
          }
        </div>

      </div>


      <div className='counterWrapper'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default App;
