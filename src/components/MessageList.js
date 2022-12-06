import React, {useState} from 'react'
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
            console.log(messages)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div className='messages'>
                <button onClick={loadMessage}>LOAD</button>
                {/*{messages.length > 1 && messages.map((i, index) => (*/}
                {/*    <div key={index}>*/}
                {/*        <h3>{i.header}</h3>*/}
                {/*        <div>{i.text}</div>*/}
                {/*        <div>{i.date}</div>*/}
                {/*    </div>*/}
                {/*))*/}
                {/*}*/}

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
