import axios from "axios";
import { ErrorToast, SuccessToast } from "../helpers/FormHelper";
import { getToken, setToken, setUserDetails } from "../helpers/SessionHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/settingsSlice";
import { SetSummery } from "../redux/state-slice/summarySlice";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/taskSlice";
import store from "../redux/store/store";

const BaseURL = `https://masud-task-manager.herokuapp.com/api/v1`;

const AxiosHeader = {headers:{"token":getToken()}}
//Registration Request
export function RegistartionRequest (email, firstName, lastName, mobile, password, photo) {
 // Loader Call Started  
 store.dispatch(ShowLoader()) 
    const URL = BaseURL + "/registration";
    const PostBody = {email:email, firstName:firstName, lastName:lastName, mobile:mobile, password:password, photo:photo}

    return axios.post(URL, PostBody).then( (res)=>{
        
        //Loader Call Ended
        store.dispatch(HideLoader())

        if(res.status ===200){ 
            if(res.data['status'] === 'fail'){
                
                if(res.data['status']['keyPattern']['email'] === 1){
                    ErrorToast('This Email is already Exist')
                    return false;
                }
                else{
                    ErrorToast('Something Went Wrongs')
                    return false;
                }

            }

            else{
                SuccessToast('User Registration Successful')
                return true;
            }
        }
        
            else{
                ErrorToast('Something Went Wrong')
                return false;
            }

    }).catch( ()=>{
        //Loader Call Ended
        store.dispatch(HideLoader())
        ErrorToast('Something Went Wrong')
        return false;
    })
}
//Login Request
export function LoginRequest(email, password){
    //  Loader  Started
    store.dispatch(ShowLoader()) 

    const URL = BaseURL + "/login";
    const PostBody = {email:email,  password:password}

    return axios.post(URL, PostBody).then( (res)=>{
        
        //Loader Call Ended
        store.dispatch(HideLoader())

        if(res.status ===200){ 
            setToken(res.data['token'])
            setUserDetails(res.data['data'])
            SuccessToast('Login Success')
            return true;
        }
        else{
            ErrorToast('Invalid Email or Password')
            return false;
        }

    }).catch( ()=>{
        //Loader Call Ended
        store.dispatch(HideLoader())
        ErrorToast('Something Went Wrong')
        return false;
    })
}
//Create New Task Request
export function CreateNewTaskRequest (title, description) {
    // Loader Call Started  
    store.dispatch(ShowLoader()) 
       const URL = BaseURL + "/createTask";
       const PostBody = {title:title, description:description, status:"New"}
   
       return axios.post(URL, PostBody, AxiosHeader).then( (res)=>{
           
           //Loader Call Ended
           store.dispatch(HideLoader())
   
           if(res.status ===200){ 
            SuccessToast('Task Create Successful')
            return true;
           }
           
               else{
                   ErrorToast('Something Went Wrong')
                   return false;
               }
   
       }).catch( ()=>{
           //Loader Call Ended
           store.dispatch(HideLoader())
           ErrorToast('Something Went Wrong')
           return false;
       })
}
// Task List by Status
export function TaskListByStatus(Status){

    store.dispatch(ShowLoader())

    const URL = BaseURL+"/taskListByStatus/"+Status;

    axios.get(URL, AxiosHeader).then( (res)=>{
        store.dispatch(HideLoader())
        
        if(res.status === 200){

            if(Status === "New"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status === "Completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status === "Progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
            else if(Status === "Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
        }
        else{
            ErrorToast('Something Went Wrong')
        }
    }).catch( (err)=>{
        ErrorToast('Something Went Wrong')
        store.dispatch(HideLoader())
    })
}
//Summery Request
export function SummeryRequest(){
   store.dispatch(ShowLoader()) 
   const URL = BaseURL+"/taskCountByStatus";
     axios.get(URL, AxiosHeader).then( (res)=>{ 
       store.dispatch(HideLoader())
       if(res.status ===200){ 
        store.dispatch(SetSummery(res.data['data']))
       }
       else{
            ErrorToast('Something Went Wrong')
           }
   }).catch( ()=>{
       ErrorToast('Something Went Wrong6')
       store.dispatch(HideLoader())
       return false;
   }) 
} 

// Delete Request
export function DeleteRequest(id){
    store.dispatch(ShowLoader()) 
    const URL = BaseURL+"/deleteTask/"+id;

    return axios.get(URL, AxiosHeader).then( (res)=>{ 
        store.dispatch(HideLoader())
       if(res.status ===200){ 
        SuccessToast('Data Delete Successful')
        return true;
       }
       else{
            ErrorToast('Something Went Wrong')
            return false;
           }
   }).catch( ()=>{
       ErrorToast('Something Went Wrong6')
       store.dispatch(HideLoader())
       return false;
   }) 
} 

//Update Status
// Task List by Status
export function UpdateStatusRequest(id, status){
    store.dispatch(ShowLoader())
    const URL = BaseURL+"/updateTaskStatus/"+id+"/"+status;

    return axios.get(URL, AxiosHeader).then( (res)=>{
        store.dispatch(HideLoader())
        if(res.status === 200){
            SuccessToast('Status Update Successful')
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }
    }).catch( (err)=>{
        ErrorToast('Something Went Wrong')
        store.dispatch(HideLoader())
    })
}