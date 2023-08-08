import React, { createContext, useState } from 'react'


export const userCont = createContext(null)
const Userauth = ({children}) => {
    const [islogin, setIslogin] = useState(false)
     
    function changeLogin(){
        setIslogin(true)
    }
  return (
    <userCont.Provider value={{islogin,changeLogin}}>
      {children}
    </userCont.Provider>
  )
}

export default Userauth
