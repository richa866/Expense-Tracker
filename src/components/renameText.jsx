import { useState, useEffect } from "react";


export default function Rename({ text, onSave, field}) {

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(field=="amt"?0:text);
  
  useEffect(() => {
    if (!isEditing) {
      setValue(field=="amt"?Number(value):value);
    }
  }, [text, isEditing]);

  const handleRename = (e) => {
    setValue(field === "amt" ? Number(e.target.value) : e.target.value);
    //set nly takes string
  };

  const handleBlur = () => {
    if (value !== "" && value !== 0) 
    {
      console.log("Value is :", value);
      onSave(field=== "amt"?Number(value):value)
      setIsEditing(false);
    }
    else{
      setIsEditing(false);
    }
    
  };
 console.log("text",text);
  return isEditing ? (
    <input
      type={field==="amt"?"number":"text"}
      value={value}
      onChange={handleRename}
      onBlur={handleBlur}
      autoFocus
      className="border rounded px-2 py-1 text-black"
    />
  ) : (
    <span onClick={() => setIsEditing(true)} className="cursor-pointer text-gray-500">
      {value ||field }
    </span>
  );
}
