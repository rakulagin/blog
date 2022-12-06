import React, { useState } from 'react'
import { addMessage } from '../firebase/firestore'
import './form.css'

const Form = () => {

    const [message, setMessage] = useState({header: "", text: ""})

    const handleChange = e => setMessage({...message, [e.target.name]: e.target.value})
    const onClick = (e) => {
        e.preventDefault()
        console.log(message);
        addMessage(message) // вызываю функцию из модуля firestore с объектом в качестве аргумента
    }

    return (
        <form >
            <h3>Форма</h3>
            <label htmlFor='header'>Заголовок</label>
            <input name='header' id="header" type='text' value={message.header} onChange={e => handleChange(e)}/>
            <label htmlFor='text'>Поле текста</label>
            <textarea name='text' value={message.text} onChange={e => handleChange(e)} id='text'/>

            <button onClick={onClick}>SAVE</button>
        </form>
    )
  }


export default Form
