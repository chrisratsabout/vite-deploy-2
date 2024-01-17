
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./form-input";

const Form = () => {
  const [email, setEmail] = useState<string>('')
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
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
