
import {useState,createContext} from 'react'
const FormContext = createContext();
export function FormContextProvider({ children}) {
  const [searchBox, setSearchBox] = useState('');
  console.log(searchBox,"from form context");
const handleChangle = (value)=>{
  console.log('Test',value.target.value);
  setSearchBox(value.target.value);
  console.log(searchBox);
  

}
  return (
    <FormContext.Provider value={{searchBox,setSearchBox,handleChangle}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormContext