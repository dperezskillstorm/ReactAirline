export const FormDiv = (fieldName,type) =>{

const refName = fieldName.concat("ref");


return(
<>

<label htmlFor={fieldName}>Last Name:</label>
    <div>
        <input id={fieldName} type={type}  ref={refName} />
    </div>





</>





)






}