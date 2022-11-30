import React, { useState , useRef, useEffect} from 'react'

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, [input])

     const submitHandler = (e) =>{
        e.preventDefault();
        addTodo({
            id: Date.now(),
            title: input,
            done: false
        });
        setInput('');
     }

  return (
    <form className='AddTodo' onSubmit={submitHandler}>
        <input value={input} onChange = {(e)=> setInput(e.target.value)} ref = {inputRef}/>
        <input type= 'submit' value='Add Todo'/>
    </form>
  )
}

export default AddTodo