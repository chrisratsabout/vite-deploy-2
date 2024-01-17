
import { createContext, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode
}

export const UserContext = createContext({
  /* 
    Pass the email parameter with an underscore to 
    let TypeScript know that a string will pass to the 
    addEmail function.
    Type '(email: string) => void' is not assignable to 
    type '() => void'.ts(2322)
  */

  user: '',
  addEmail: (_email:string) => {}
})

export const UserProvider = ({children}: Props) => {
  const [user, setUser] = useState('')

  // Add the email to the user
  const addEmail = (email: string) => {
    setUser(email)
  }

  const value = {
    user,
    addEmail
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
