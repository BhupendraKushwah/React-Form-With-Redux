import React from 'react'

const InputComponent = ({label,icon,type,name,placeholder,isImportant}) => {
  return (
    <div className='inputContainer'>
      <label>{label}{isImportant&&<span className="impStart">*</span>}</label>
        <div className="inputBox">
        {icon}
        <input type={type} name={name} id={name} placeholder={placeholder}  required={isImportant}/>
        </div>
    </div>
  )
}

export default InputComponent
