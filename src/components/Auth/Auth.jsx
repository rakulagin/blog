import React, {useState} from 'react'
import {useForm} from 'react-hook-form'


function ExitAuth({regData, setRegData}) {

    const exitClick = () => {
        setRegData(null)
    }
    return (
        <div>
            <p> Привет, {regData.name}, ты {regData.role}</p>
            <button onClick={exitClick}>Выйти</button>
        </div>
    )
}

const Auth = () => {
    const {register, handleSubmit} = useForm();

    const [regData, setRegData] = useState(null)

    // сделал тестовую бд пользователей
    const users = [
        {
            role: "admin",
            name: "Рома",
            login: "roma",
            password: "111"
        },
        {
            role: "admin",
            name: "Дима",
            login: "dima",
            password: "222"
        },
        {
            role: "user",
            name: "Гость",
            login: "test",
            password: "333"
        }
    ]

    const onSubmit = data => {
        users.forEach(el => {
            if (data.login === el.login && data.password === el.password) {
                setRegData(el)
            }
        })
    };

    return (
        <>
            {
                regData ? (
                    <ExitAuth regData={regData}
                              setRegData={setRegData}
                    />
                ) : (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("login", {required: true})} placeholder='login'/>
                            <input {...register("password", {required: true})} placeholder='password'/>
                            <button type="submit">Отправить</button>
                        </form>
                        {regData ? <p> Привет, {regData.name}</p> : <p>вы не авторизованы</p>}
                    </>
                )
            }
        </>
    )
}

export default Auth