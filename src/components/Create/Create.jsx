import React, { useRef } from 'react';
import { ErrorToast, IsEmpty } from '../../helpers/FormHelper';
import {useNavigate} from 'react-router-dom';
import { CreateNewTaskRequest } from '../../APIRequest/APIRequest';

const Create = () => {

    let taskRef,taskDescRef  = useRef();
    const navigate = useNavigate();

    const createNewTask = ()=>{
        const task = taskRef.value; 
        const taskDesc = taskDescRef.value; 

        if(IsEmpty(task)){
            ErrorToast("Task Name is Required ")
            }

        else if(IsEmpty(taskDesc)){
            ErrorToast("Task Description is Required ")
        }
        else{
            CreateNewTaskRequest(task, taskDesc).then( (res)=> {
                if(res === true){
                    navigate("/All")
                }
        
            })
            
        }
    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-lg-8 col-md-8 col-sm-12 p-2'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4>Create New</h4>
                            <br />
                            <input ref={input=>taskRef=input} className='form-control animated fadeInUp' type="text" placeholder='Task Name'  />
                            <br />
                            <textarea ref={input=>taskDescRef=input} className='form-control animated fadeInUp' type="textarea" rows={5} placeholder='Task Name'  />
                            <button onClick={createNewTask} className='btn btn-primary float-end mt-5'>Create</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Create;