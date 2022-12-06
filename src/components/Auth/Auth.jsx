import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

const Auth = () => {
    const { register, handleSubmit } = useForm();

    const [regData, setRegData] = useState({})
     const [role, setRole] = useState(null)

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
        setRegData(data)
    };

    console.log("regData:", regData)

    return (
        // это реакт хук форм
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("login" , {required: true})} placeholder='login' />
            <input {...register("password" , {required: true})} placeholder='password' />
            <input type="submit" />
        </form>
    )
}

export default Auth