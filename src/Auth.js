

  export function userLogin() 
    {
        if(localStorage.getItem("token"!=null))
            {
                return true;
            }
        else
            {
                return false;
            }
    }
   export function getToken()
    {
        const token=localStorage.getItem("token");
        return token;
    }
