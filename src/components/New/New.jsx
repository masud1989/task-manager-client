import React, { Fragment, useEffect } from 'react';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import { AiFillHourglass, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import {Container} from "react-bootstrap";
import DeleteAlert from '../../helpers/DeleteAlert';
import { UpdateStatus } from '../../helpers/UpdateAlert';


const New = () => {

    // Page Load
    useEffect( ()=>{
        TaskListByStatus("New")
    }, [])

    const NewList = useSelector((state)=>state.task.New);

    //Delete Function
    const DeleteItem = (id)=>{
        DeleteAlert(id).then( (result)=>{
            if(result === true){
                TaskListByStatus("New")
            }
        })
    }

      //Status Change Function
      const StatusChange = (id, status)=>{
        UpdateStatus(id, status).then( (result)=>{
            if(result === true){
                TaskListByStatus("New") 
            }
        })
        
    }

    return (
        <Fragment>
            <Container fluid={true} className="content-body">
            <div className="row p-0 m-0">
                        <div className="col-12 col-md-6 col-lg-8 px-3">
                            <h5>Task New</h5>
                        </div>
                        <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                            <div className="row">
                                <div className="col-8">
                                    <input className="form-control w-100"/>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary w-100">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                            NewList.map((item,i)=>
                            <div key={i.toString()}  className="col-12 col-lg-3 col-sm-6 col-md-4  p-2 m-3">
                                <div className="card h-100">
                                    <div className="card-body">
                                        {/* <h5 className="animated fadeInUp">Total Progress </h5> */}
                                        {/* <h6 className="text-secondary animated fadeInUp">55</h6> */}
                                        <h4 className="animated fadeInUp">{item.title}</h4>
                                        <p className="animated fadeInUp">{item.description}</p>
                                        <p className="m-0 animated fadeInUp p-0">
                                            <AiFillHourglass/>{item.createdDate}
                                            <a onClick={StatusChange.bind(this,item._id, item.status)} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                            <a onClick={DeleteItem.bind(this,item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                            <a className="badge float-end bg-info">{item.status}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    
                    </div>
            </Container>
        </Fragment>
    );
};

export default New;