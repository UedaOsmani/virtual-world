import react, {useState} from "react";

const Loginpage = () => {
const [value, setValue] = useState("");

const handleChange = (event) => {
 setValue(event.target.value);
}

 return(
     <div>
         <label>
         <input type="text" onChange={handleChange} value={value}  />

         My value i  {value}
         </label>
     </div>
 )

}

export default Loginpage