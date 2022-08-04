import React, { useRef } from 'react';
import { ErrorToast, IsEmpty } from '../../helpers/FormHelper';
import {useNavigate} from 'react-router-dom';
import { CreateNewTaskRequest } from '../../APIRequest/APIRequest';

const Create = () => {

    let titleRef, descriptionRef  = useRef();
    const navigate = useNavigate();

    const createNewTask = ()=>{
        const title = titleRef.value; 
        const description = descriptionRef.value; 

        if(IsEmpty(title)){
            ErrorToast("Task Name is Required ")
            }

        else if(IsEmpty(description)){
            ErrorToast("Task Description is Required ")
        }
        else{
            CreateNewTaskRequest(title, description).then( (res)=> {
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
                            {/* <input ref={input=>taskRef=input} className='form-control animated fadeInUp' type="text" placeholder='Task Name'  /> */}
                            <input ref={(input)=>titleRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br />
                            <textarea ref={input=>descriptionRef=input} className='form-control animated fadeInUp' type="text" rows={5} placeholder='Task Name'  />
                            {/* <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/> */}
                            <button onClick={createNewTask} className='btn btn-primary float-end mt-5'>Create</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Create;