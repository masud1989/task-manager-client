import axios from "axios";
import { ErrorToast, SuccessToast } from "../helpers/FormHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/settingsSlice";
import store from "../redux/store/store";

const BaseURL = `https://masud-task-manager.herokuapp.com/api/v1`;

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