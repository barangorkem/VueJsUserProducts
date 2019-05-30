

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
    export function isAuthRoles(urlRoles)
        {
            debugger
            /* eslint-disable no-console */
            console.log(urlRoles)
            let urlArray=new Array();
            urlArray=urlRoles;
            const userRoles=JSON.parse(localStorage.getItem("roles"));
            for(let i=0;i<userRoles.length;i++)
                {
                    console.log(urlArray.indexOf(userRoles[i]))
                    if(!urlArray.indexOf(userRoles[i]))
                        {
                            return true;  
                        }
                }
                return false;
                
            
          /* eslint-disable no-console */
        }
