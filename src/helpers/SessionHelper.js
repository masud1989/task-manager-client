class SessionHelper{
    setToken(token){
       return localStorage.setItem("token", token)
    }  
    getToken(){
        return localStorage.getItem("token")
    } 
    
    setUserDetails(UserDetails){
       return localStorage.setItem("UserDetails", JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }

}

export const {setToken, getToken, setUserDetails, getUserDetails} = new SessionHelper();
