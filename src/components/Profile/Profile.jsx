import React, { useEffect, useRef } from 'react';
import { GetProfileRequest, UpdateProfileRequest } from '../../APIRequest/APIRequest';
import { useSelector } from 'react-redux';
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from '../../helpers/FormHelper';
import { useNavigate } from 'react-router'; 
const Profile = () => {

    let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef, userImgRef, userImgVwRef = useRef();
    const navigate = useNavigate();
    const  updateBtn = () =>{
        let email=emailRef.value;
        let firstName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        let photo= userImgVwRef.src; 

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            UpdateProfileRequest(email, firstName, lastName, mobile, password, photo).then((res)=>{
                if(res === true){
                    navigate('/')
                }
            })
        }
    }

    useEffect( ()=>{
        GetProfileRequest()
    }, [])

    const ProfileData = useSelector( (state)=> state.profile.value)

    return (
        <div>
             <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>User Profile Data</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                            <label className='me-5'>Profile Picture</label>
                                <img ref={(input)=>userImgVwRef=input}  className='icon-nav-img' src={ProfileData['photo']} alt='' />
                                <div className="row m-0 p-0">
                                    <div className="col-md-6 p-2">
                                        <label>Change Profile Picture</label>
                                        <input ref={(input)=>userImgRef=input}   className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Email Address</label>
                                        <input readOnly={true} ref={(input)=>emailRef=input}  defaultValue={ProfileData['email']} className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} defaultValue={ProfileData['firstName']} className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} defaultValue={ProfileData['lastName']} className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} defaultValue={ProfileData['mobile']} className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-6 p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} defaultValue={ProfileData['password']} className="form-control animated fadeInUp" type="password"/>
                                    </div>

                                </div>
                                <div className="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={updateBtn} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;