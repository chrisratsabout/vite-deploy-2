
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./form-input";
import { useContext } from "react";
import { UserContext } from "../context/user-context";


const Form = () => {
  const [email, setEmail] = useState<string>('')
  
  const { user, addEmail } = useContext(UserContext)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {  
      event.preventDefault()
      try {
        addEmail(email)
        setEmail('')
      } catch (error) {
        console.log(error)
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }

    return(
      <form onSubmit={handleSubmit}>
        {/* Check the user email is display here */}
        <h1>Form title</h1>
        <div data-testid="user">{ user }</div>
        <FormInput
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  export default Form;