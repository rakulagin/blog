import React, {useState, useEffect} from 'react'
import {readMessages} from '../firebase/firestore'
import './form.css'

const MessageList = () => {
    // const [messages, setMessages] = useState([{
    //     header: '',
    //     text: '',
    //     date: '',
    //     imgURI: ''
    // }])

    const [messages, setMessages] = useState([])

    const loadMessage = async () => {
        try {
            const data = await readMessages() // вызов функции считывания из облака
            setMessages(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        loadMessage()
    }, [])

    return (
        <>
            <div className='messages'>
                {messages && messages.map((i, index) => (
                    <div key={index}>
                        <h3>{i.header}</h3>
                        <div>{i.text}</div>
                        {/*<div>{i.date}</div>*/}
                    </div>
                ))}
            </div>
        </>
    )
}


export default MessageList
