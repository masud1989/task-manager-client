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

    // logout Function
    removeSession = ()=>{
        localStorage.clear();
        window.location.href = '/login'
    }

}

export const {setToken, getToken, setUserDetails, getUserDetails, removeSession} = new SessionHelper();
